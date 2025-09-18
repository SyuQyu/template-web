# Autosync System

The Autosync System is a critical component of Eesel AI that automatically synchronizes content from various external data sources. This document provides a comprehensive overview of how the autosync system works, its architecture, and implementation details.

## Overview

The Autosync System enables Eesel AI to maintain up-to-date knowledge bases by automatically syncing content from external sources like Zendesk, Intercom, Confluence, websites, and more. It operates on both scheduled and event-driven triggers to ensure data freshness while managing API rate limits and system resources.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                               Autosync System                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐          │
│  │   Scheduler     │    │   Job Queue     │    │   Workers       │          │
│  │   (Cron)        │───▶│   (AWS SQS)     │───▶│   (Background)  │          │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘          │
│           │                       │                       │                 │
│           ▼                       ▼                       ▼                 │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐          │
│  │  Static Jobs    │    │  Dynamic Jobs   │    │  Source Loaders │          │
│  │  (Predefined)   │    │  (Customer)     │    │  (Adapters)     │          │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘          │
│                                                          │                 │
│                                                          ▼                 │
│                                          ┌─────────────────────────────────┐ │
│                                          │        Content Processing       │ │
│                                          │                                 │ │
│                                          │  ┌─────────┐  ┌─────────────┐   │ │
│                                          │  │Extract  │  │   Transform │   │ │
│                                          │  └─────────┘  └─────────────┘   │ │
│                                          │  ┌─────────┐  ┌─────────────┐   │ │
│                                          │  │ Filter  │  │    Load     │   │ │
│                                          │  └─────────┘  └─────────────┘   │ │
│                                          └─────────────────────────────────┘ │
│                                                          │                 │
│                                                          ▼                 │
│                                          ┌─────────────────────────────────┐ │
│                                          │         Data Storage            │ │
│                                          │                                 │ │
│                                          │  ┌───────────┐ ┌──────────────┐ │ │
│                                          │  │PostgreSQL │ │ Vector Store │ │ │
│                                          │  └───────────┘ └──────────────┘ │ │
│                                          └─────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. **Scheduler Component**

The scheduler is responsible for triggering synchronization jobs at predefined intervals.

#### **Implementation Location**

```
server/app/sources/synchroniser/initialisation.py
```

#### **Scheduling Logic**

```python
def run_daily_sync_cron():
    """
    Main scheduling function that runs every hour to check if it's time to:
    1. Run static jobs (predefined customer syncs)
    2. Run dynamic jobs (customer-configured syncs)
    """
    aest = pytz.timezone("Australia/Sydney")
    now_aest = datetime.now(pytz.utc).astimezone(aest)

    # Static jobs run at 2 AM AEST
    if now_aest.hour == 2:
        last_run = redis_conn.get(SYNCHRONISER_LAST_RUN_KEY)
        if should_run_today(last_run, now_aest.date()):
            enqueue_static_jobs()
            mark_as_run_today(now_aest.date())

    # Dynamic jobs run every hour for different customer segments
    if should_run_dynamic_jobs(now_aest.hour):
        enqueue_sync_jobs(now_aest.hour)
```

#### **Redis-based Locking**

```python
LOCK_KEY = "eesel_ai_sync_processor_lock"
LOCK_TTL = 3  # seconds
LOCK_VALUE = "1"

def acquire_lock():
    """Prevents multiple instances from running the same job"""
    return redis_conn.set(LOCK_KEY, LOCK_VALUE, nx=True, ex=LOCK_TTL)

def release_lock():
    """Releases the lock after job completion"""
    redis_conn.delete(LOCK_KEY)
```

### 2. **Job Queue System (AWS SQS)**

The job queue manages the flow of synchronization tasks from schedulers to workers.

#### **Queue Configuration**

```python
SYNCHRONISER_QUEUE_URL = get_secret("EESEL_SQS_SYNCHRONISER_QUEUE_URL")

# SQS Configuration
sqs = boto3.client("sqs", region_name=os.environ.get("EESEL_AWS_REGION"))

# Queue Settings
VISIBILITY_TIMEOUT = 300  # 5 minutes
MAX_RECEIVE_COUNT = 3     # Retry attempts
DELAY_SECONDS = 30        # Initial delay before processing
```

#### **Message Format**

```python
@dataclass
class SynchroniseMessage:
    configuration: SynchroniseSourceConfig

    def todict(self):
        """Converts message to dictionary for SQS"""
        return {
            "namespace_id": self.configuration.namespace_id,
            "type": self.configuration.type.value,
            "filter": self.configuration.filter.__dict__,
            "properties": self.configuration.properties,
            "job_id": self.configuration.job_id,
            "disable_delete": self.configuration.disable_delete
        }

@dataclass
class SynchroniseSourceConfig:
    namespace_id: str           # Customer namespace identifier
    filter: Filter             # Filtering criteria for sync
    type: SourceType           # Type of source (zendesk, sitemap, etc.)
    properties: Dict           # Source-specific configuration
    job_id: Optional[str]      # Unique job identifier
    disable_delete: bool       # Whether to preserve existing content
    dry_run: bool             # Test mode flag
```

### 3. **Static Jobs System**

Static jobs are predefined synchronization configurations for specific customers, hardcoded in the system.

#### **Implementation Location**

```
server/app/sources/synchroniser/synchroniser.py (lines 486-1000+)
```

#### **Static Job Definition**

```python
def build_static_jobs():
    """
    Builds a list of predefined synchronization jobs.
    These are typically for enterprise customers with specific requirements.
    """
    now = datetime.now()

    # Predefined namespace IDs for different customers
    VFM_NAMESPACE_ID = "563d2f21-f7d6-4c73-9dc4-16a994392276"
    SNAPCAR_MAIN_NAMESPACE_ID = "afe96471-1720-4a4d-b9c8-436b21eec7bb"
    SMAVA_NAMESPACE_ID = "528ac45d-3d87-48b3-aeae-d5e74ecf3ff2"
    # ... many more customer namespaces

    return [
        # Zendesk sync example
        SynchroniseMessage(
            configuration=SynchroniseSourceConfig(
                SNAPCAR_MAIN_NAMESPACE_ID,
                type=SourceType.ZENDESK,
                filter=Filter(
                    updated_since=now - timedelta(hours=32),
                ),
                disable_delete=True,
                properties={
                    "url": "https://support.snappcar.nl/hc",
                    "is_periodic_sync": True,
                },
            )
        ),

        # Website sitemap sync example
        SynchroniseMessage(
            configuration=SynchroniseSourceConfig(
                ADCLIENT_NS_1,
                type=SourceType.SITEMAP,
                filter={
                    "contains": None,
                    "does_not_contain": None,
                },
                properties={"url": "https://comforth.dk"}
            )
        ),
        # ... hundreds more predefined jobs
    ]
```

#### **Static Job Characteristics**

* **Predefined customers**: Enterprise clients with specific requirements
* **Fixed schedules**: Run daily at 2 AM AEST
* **Incremental sync**: Only sync content updated in last 32 hours
* **No deletion**: `disable_delete=True` to preserve existing content
* **High reliability**: Direct code implementation for critical customers

### 4. **Dynamic Jobs System**

Dynamic jobs are customer-configured synchronization jobs that adapt to customer settings.

#### **Customer Segmentation**

```python
def enqueue_sync_jobs(current_hour):
    """
    Distributes customer sync jobs across 24 hours to balance load.
    Each customer is assigned an hour based on their namespace UUID.
    """
    jobs = []

    with flask_app.app_context():
        subscription_service = ServiceLocator.get_service("SubscriptionService")
        connection_service = ServiceLocator.get_service("ConnectionService")

        # Get all paying customers
        namespaces = subscription_service.get_paying_namespaces()

        for namespace in namespaces:
            # Distribute customers across 24 hours using UUID hash
            if (uuid_to_int(namespace.id) % 24) == current_hour:
                helpdesk_connections = connection_service.get_helpdesk_connections(
                    namespace.id
                )

                for connection in helpdesk_connections:
                    job = create_sync_job(connection, namespace)
                    jobs.append(job)

    enqueue_jobs(jobs)

def uuid_to_int(uuid_str):
    """Convert UUID to integer for hour distribution"""
    hash_obj = hashlib.md5(uuid_str.encode())
    return int.from_bytes(hash_obj.digest(), byteorder="little")
```

#### **Connection-based Job Creation**

```python
def create_sync_job(connection: Connection, namespace: Namespace):
    """Create sync job based on customer connection configuration"""

    if connection.connectionType == ConnectionType.ZENDESK:
        return SynchroniseMessage(
            configuration=SynchroniseSourceConfig(
                namespace.id,
                type=SourceType.ZENDESK,
                filter=Filter(
                    updated_since=datetime.now() - timedelta(hours=32),
                ),
                properties={
                    "url": connection.url,
                    "auth_header": get_connection_auth(connection),
                    "is_periodic_sync": True,
                }
            )
        )

    elif connection.connectionType == ConnectionType.INTERCOM:
        return SynchroniseMessage(
            configuration=SynchroniseSourceConfig(
                namespace.id,
                type=SourceType.INTERCOM,
                filter=Filter(
                    updated_since=datetime.now() - timedelta(hours=32),
                ),
                properties={
                    "url": connection.url,
                    "access_token": get_connection_token(connection),
                    "is_periodic_sync": True,
                }
            )
        )
```

### 5. **Worker Processing System**

Background workers process synchronization jobs from the SQS queue.

#### **Worker Initialization**

```python
def init_sync_processor():
    """Initialize background worker threads"""
    print("Synchroniser thread initialised")
    thread = threading.Thread(target=receive_and_process_messages)
    thread.daemon = True
    thread.start()

def receive_and_process_messages():
    """Main worker loop for processing sync jobs"""
    while True:
        try:
            # Poll SQS for messages
            response = sqs.receive_message(
                QueueUrl=SYNCHRONISER_QUEUE_URL,
                MaxNumberOfMessages=MAX_PARALLEL_MSG,
                WaitTimeSeconds=20,  # Long polling
                VisibilityTimeout=300
            )

            messages = response.get('Messages', [])
            for message in messages:
                process_single_message(message)

        except Exception as e:
            logger.error(f"Error in worker loop: {e}")
            time.sleep(30)  # Back off on error
```

#### **Message Processing**

```python
def process_single_message(message):
    """Process individual sync job message"""
    try:
        # Decode JWT token from message
        token = message['Body']
        job_data = decode_validate_jwt(token)

        # Create sync message object
        sync_message = SynchroniseMessage.from_dict(job_data)

        # Process the sync job
        process_message(sync_message)

        # Delete message from queue on success
        sqs.delete_message(
            QueueUrl=SYNCHRONISER_QUEUE_URL,
            ReceiptHandle=message['ReceiptHandle']
        )

    except Exception as e:
        logger.error(f"Error processing message: {e}")
        # Message will become visible again for retry
```

### 6. **Source Loader Factory**

The loader factory creates appropriate adapters for different source types.

#### **Loader Factory Implementation**

```python
def get_loader(
    config: SynchroniseSourceConfig,
    callback_handler: Optional[SynchroniserCallbackHandler],
):
    """Factory method to create appropriate source loader"""

    if config.type == SourceType.ZENDESK:
        return PublicZendeskSourceLoader(
            config.properties["url"],
            auth_header=config.properties.get("auth_header"),
            namespace_id=config.namespace_id,
            is_periodic_sync=config.properties.get("is_periodic_sync", False),
            job_id=config.job_id,
            callback_handler=callback_handler,
        )

    elif config.type == SourceType.SITEMAP:
        return SitemapSourceLoader(
            config.properties["url"],
            namespace_id=config.namespace_id,
            callback_handler=callback_handler,
            filter=config.filter
        )

    elif config.type == SourceType.INTERCOM:
        return IntercomHelpdeskLoader(
            config.properties["url"],
            namespace_id=config.namespace_id,
            access_token=config.properties["access_token"],
            callback_handler=callback_handler,
        )

    elif config.type == SourceType.CONFLUENCE_DC:
        return ConfluenceDCSourceLoader(
            config.properties["url"],
            username=config.properties["username"],
            token=config.properties["token"],
            spaces=config.properties.get("spaces", []),
            callback_handler=callback_handler,
        )

    # ... more loader types

    else:
        raise ValueError(f"Unsupported source type: {config.type}")
```

#### **Source Loader Interface**

```python
class BaseSourceLoader:
    """Base class for all source loaders"""

    def __init__(self, namespace_id: str, callback_handler=None):
        self.namespace_id = namespace_id
        self.callback_handler = callback_handler
        self.logger = logging.getLogger(f"{self.__class__.__name__}")

    def load(self) -> List[Source]:
        """Load content from external source"""
        raise NotImplementedError

    def should_process_item(self, item) -> bool:
        """Determine if item should be processed"""
        return True

    def extract_content(self, item) -> Optional[Document]:
        """Extract content from source item"""
        raise NotImplementedError

    def notify_progress(self, current: int, total: int):
        """Notify progress to callback handler"""
        if self.callback_handler:
            self.callback_handler.on_progress(current, total)
```

### 7. **Content Processing Pipeline**

Once content is loaded from sources, it goes through a processing pipeline.

#### **Processing Steps**

```python
def process_message(synchronise_message: SynchroniseMessage):
    """Main message processing function"""
    config = synchronise_message.configuration

    # Create callback handler for progress tracking
    callback_handler = SynchroniserCallbackHandler(
        config.namespace_id,
        config.job_id
    )

    try:
        # Initialize status tracking
        callback_handler.on_start()

        # Get appropriate loader
        loader = get_loader(config, callback_handler)

        if not loader:
            raise ValueError(f"No loader available for type: {config.type}")

        # Load content from external source
        sources = loader.load()

        # Process and index content
        if not config.dry_run:
            async_index_sources(sources, config.namespace_id)
        else:
            log_dry_run_stats(sources)

        # Mark as completed
        callback_handler.on_completion()

    except Exception as e:
        callback_handler.on_error(str(e))
        raise
```

#### **Content Indexing**

```python
def async_index_sources(sources: List[Source], namespace_id: str):
    """Asynchronously index processed content"""

    for source in sources:
        # Extract documents from source
        documents = source.get_documents()

        # Process in batches for memory efficiency
        batch_size = 50
        for i in range(0, len(documents), batch_size):
            batch = documents[i:i + batch_size]

            # Store in PostgreSQL
            store_documents_batch(batch, namespace_id)

            # Generate embeddings and store in vector DB
            generate_and_store_embeddings(batch, namespace_id)

            # Update search indices
            update_search_indices(batch, namespace_id)
```

## Filtering and Content Processing

### 1. **Filter System**

The filter system allows precise control over what content gets synchronized.

#### **Filter Types**

```python
@dataclass
class Filter:
    """Filtering criteria for content synchronization"""

    # Time-based filtering
    updated_since: Optional[datetime] = None
    updated_before: Optional[datetime] = None

    # Content filtering
    contains: Optional[List[str]] = None
    does_not_contain: Optional[List[str]] = None

    # Metadata filtering
    categories: Optional[List[str]] = None
    tags: Optional[List[str]] = None
    authors: Optional[List[str]] = None

    # Source-specific filtering
    other_properties: Optional[Dict] = None

def apply_filter(filter_config: Filter, item) -> bool:
    """Apply filter to determine if item should be processed"""

    # Time-based filtering
    if filter_config.updated_since:
        if item.updated_at < filter_config.updated_since:
            return False

    # Content filtering
    if filter_config.contains:
        content = item.get_content().lower()
        if not any(term.lower() in content for term in filter_config.contains):
            return False

    if filter_config.does_not_contain:
        content = item.get_content().lower()
        if any(term.lower() in content for term in filter_config.does_not_contain):
            return False

    # Category filtering
    if filter_config.categories:
        if not any(cat in item.categories for cat in filter_config.categories):
            return False

    return True
```

### 2. **Content Transformation**

Content undergoes transformation before indexing to optimize search and AI capabilities.

#### **Text Processing**

```python
def process_content(raw_content: str, source_type: SourceType) -> ProcessedContent:
    """Process raw content for indexing"""

    # Clean HTML if needed
    if source_type in [SourceType.ZENDESK, SourceType.INTERCOM, SourceType.SITEMAP]:
        clean_content = clean_html(raw_content)
    else:
        clean_content = raw_content

    # Extract text
    text_content = extract_text(clean_content)

    # Normalize whitespace
    normalized_content = normalize_whitespace(text_content)

    # Extract metadata
    metadata = extract_metadata(raw_content, source_type)

    # Chunk content for embedding
    chunks = create_content_chunks(normalized_content)

    return ProcessedContent(
        raw_content=raw_content,
        clean_content=normalized_content,
        chunks=chunks,
        metadata=metadata
    )

def create_content_chunks(content: str, chunk_size=1000, overlap=200):
    """Create overlapping chunks for embedding generation"""
    chunks = []
    start = 0

    while start < len(content):
        end = start + chunk_size
        chunk = content[start:end]

        # Try to break at sentence boundary
        if end < len(content):
            last_period = chunk.rfind('.')
            if last_period > chunk_size * 0.8:  # If period is reasonably close to end
                end = start + last_period + 1
                chunk = content[start:end]

        chunks.append(chunk.strip())
        start = end - overlap

    return chunks
```

## Error Handling and Reliability

### 1. **Retry Mechanisms**

The system implements multiple levels of retry mechanisms for reliability.

#### **SQS-Level Retries**

```python
# SQS Configuration for automatic retries
VISIBILITY_TIMEOUT = 300  # 5 minutes
MAX_RECEIVE_COUNT = 3     # Try up to 3 times

# Dead Letter Queue for failed messages
DEAD_LETTER_QUEUE_URL = get_secret("EESEL_SQS_DLQ_URL")
```

#### **Application-Level Retries**

```python
def process_with_retry(sync_message: SynchroniseMessage, max_retries=3):
    """Process sync message with exponential backoff retry"""

    for attempt in range(max_retries + 1):
        try:
            process_message(sync_message)
            return  # Success, exit retry loop

        except RetryableError as e:
            if attempt < max_retries:
                delay = 2 ** attempt * 30  # Exponential backoff
                logger.warning(f"Retrying after {delay}s due to: {e}")
                time.sleep(delay)
            else:
                logger.error(f"Failed after {max_retries} retries: {e}")
                send_to_dead_letter_queue(sync_message)

        except NonRetryableError as e:
            logger.error(f"Non-retryable error: {e}")
            send_to_dead_letter_queue(sync_message)
            break
```

#### **Source-Specific Error Handling**

```python
class ZendeskSourceLoader(BaseSourceLoader):
    def load_with_rate_limiting(self):
        """Load content with Zendesk-specific rate limiting"""

        rate_limiter = RateLimiter(requests_per_minute=700)

        try:
            for page in self.get_pages():
                rate_limiter.wait_if_needed()

                response = self.make_api_request(page)

                if response.status_code == 429:  # Rate limited
                    retry_after = int(response.headers.get('Retry-After', 60))
                    logger.warning(f"Rate limited, waiting {retry_after}s")
                    time.sleep(retry_after)
                    continue

                elif response.status_code >= 500:  # Server error
                    raise RetryableError(f"Server error: {response.status_code}")

                elif response.status_code >= 400:  # Client error
                    raise NonRetryableError(f"Client error: {response.status_code}")

                yield response.json()

        except requests.exceptions.ConnectionError as e:
            raise RetryableError(f"Connection error: {e}")
```

### 2. **Monitoring and Alerting**

The autosync system includes comprehensive monitoring for operational visibility.

#### **Status Tracking**

```python
class SynchroniserCallbackHandler:
    """Handles status updates and progress tracking"""

    def __init__(self, namespace_id: str, job_id: str):
        self.namespace_id = namespace_id
        self.job_id = job_id
        self.status_service = StatusService()
        self.start_time = None

    def on_start(self):
        """Called when sync job starts"""
        self.start_time = datetime.utcnow()
        self.status_service.update_status(
            namespace_id=self.namespace_id,
            job_id=self.job_id,
            status="RUNNING",
            message="Synchronization started"
        )

    def on_progress(self, current: int, total: int):
        """Called to update progress"""
        progress_percentage = (current / total) * 100
        self.status_service.update_progress(
            namespace_id=self.namespace_id,
            job_id=self.job_id,
            progress=progress_percentage,
            current=current,
            total=total
        )

    def on_completion(self):
        """Called when sync job completes successfully"""
        duration = datetime.utcnow() - self.start_time
        self.status_service.update_status(
            namespace_id=self.namespace_id,
            job_id=self.job_id,
            status="COMPLETED",
            message=f"Synchronization completed in {duration.total_seconds()}s"
        )

    def on_error(self, error_message: str):
        """Called when sync job encounters an error"""
        self.status_service.update_status(
            namespace_id=self.namespace_id,
            job_id=self.job_id,
            status="FAILED",
            message=f"Synchronization failed: {error_message}"
        )
```

#### **Metrics Collection**

```python
def collect_sync_metrics(sync_message: SynchroniseMessage,
                        start_time: datetime,
                        end_time: datetime,
                        documents_processed: int,
                        errors_encountered: int):
    """Collect metrics for monitoring and analysis"""

    duration = (end_time - start_time).total_seconds()

    metrics = {
        "namespace_id": sync_message.configuration.namespace_id,
        "source_type": sync_message.configuration.type.value,
        "duration_seconds": duration,
        "documents_processed": documents_processed,
        "errors_encountered": errors_encountered,
        "processing_rate": documents_processed / duration if duration > 0 else 0,
        "timestamp": end_time.isoformat()
    }

    # Send to monitoring system
    send_metrics_to_monitoring(metrics)

    # Log for debugging
    logger.info(f"Sync completed for {sync_message.configuration.namespace_id}: "
               f"{documents_processed} documents in {duration:.2f}s")
```

## Performance Optimization

### 1. **Load Distribution**

The system distributes load across time and resources to maintain performance.

#### **Customer Hour Distribution**

```python
def distribute_customers_across_hours():
    """
    Distribute customers across 24 hours based on UUID hash.
    This ensures even load distribution and avoids thundering herd.
    """
    hour_distribution = defaultdict(list)

    for namespace in get_all_namespaces():
        hour = uuid_to_int(namespace.id) % 24
        hour_distribution[hour].append(namespace.id)

    # Log distribution for monitoring
    for hour, namespaces in hour_distribution.items():
        logger.info(f"Hour {hour}: {len(namespaces)} namespaces")

    return hour_distribution
```

#### **Resource-based Throttling**

```python
class ResourceThrottler:
    """Throttle processing based on system resources"""

    def __init__(self, max_memory_mb=1024, max_cpu_percent=80):
        self.max_memory_mb = max_memory_mb
        self.max_cpu_percent = max_cpu_percent

    def should_throttle(self) -> bool:
        """Check if processing should be throttled"""
        memory_usage = psutil.virtual_memory().percent
        cpu_usage = psutil.cpu_percent(interval=1)

        if memory_usage > 90:  # Critical memory usage
            logger.warning(f"High memory usage: {memory_usage}%")
            return True

        if cpu_usage > self.max_cpu_percent:
            logger.warning(f"High CPU usage: {cpu_usage}%")
            return True

        return False

    def wait_for_resources(self):
        """Wait until resources are available"""
        while self.should_throttle():
            time.sleep(30)  # Wait 30 seconds before checking again
```

### 2. **Caching Strategy**

Intelligent caching reduces redundant API calls and improves performance.

#### **Multi-level Caching**

```python
class SyncCache:
    """Multi-level caching for sync operations"""

    def __init__(self):
        self.redis_client = redis.Redis.from_url(os.environ['REDIS_URL'])
        self.memory_cache = {}
        self.cache_ttl = 3600  # 1 hour

    def get_cached_content(self, source_url: str, last_modified: datetime):
        """Get cached content if available and fresh"""
        cache_key = f"sync_content:{hashlib.md5(source_url.encode()).hexdigest()}"

        # Check memory cache first
        if cache_key in self.memory_cache:
            cached_data = self.memory_cache[cache_key]
            if cached_data['last_modified'] >= last_modified:
                return cached_data['content']

        # Check Redis cache
        cached_data = self.redis_client.hgetall(cache_key)
        if cached_data:
            cached_modified = datetime.fromisoformat(cached_data[b'last_modified'].decode())
            if cached_modified >= last_modified:
                content = json.loads(cached_data[b'content'].decode())
                # Update memory cache
                self.memory_cache[cache_key] = {
                    'content': content,
                    'last_modified': cached_modified
                }
                return content

        return None

    def cache_content(self, source_url: str, content: dict, last_modified: datetime):
        """Cache content at multiple levels"""
        cache_key = f"sync_content:{hashlib.md5(source_url.encode()).hexdigest()}"

        cached_data = {
            'content': content,
            'last_modified': last_modified
        }

        # Store in memory cache
        self.memory_cache[cache_key] = cached_data

        # Store in Redis cache
        self.redis_client.hset(cache_key, mapping={
            'content': json.dumps(content),
            'last_modified': last_modified.isoformat()
        })
        self.redis_client.expire(cache_key, self.cache_ttl)
```

## Security Considerations

### 1. **JWT Token Security**

All sync jobs use JWT tokens for secure message passing.

```python
def generate_synchronise_jwt(namespace_id: str, job_data: dict) -> str:
    """Generate secure JWT token for sync job"""
    payload = {
        'namespace_id': namespace_id,
        'job_data': job_data,
        'iat': datetime.utcnow(),
        'exp': datetime.utcnow() + timedelta(hours=24),
        'iss': 'eesel-ai-autosync',
        'aud': 'eesel-ai-workers'
    }

    return jwt.encode(
        payload,
        get_secret("JWT_SECRET_KEY"),
        algorithm='HS256'
    )

def decode_validate_jwt(token: str) -> dict:
    """Decode and validate JWT token"""
    try:
        payload = jwt.decode(
            token,
            get_secret("JWT_SECRET_KEY"),
            algorithms=['HS256'],
            audience='eesel-ai-workers',
            issuer='eesel-ai-autosync'
        )
        return payload['job_data']
    except jwt.ExpiredSignatureError:
        raise SecurityError("Sync job token expired")
    except jwt.InvalidTokenError:
        raise SecurityError("Invalid sync job token")
```

### 2. **Credential Management**

Source credentials are securely stored and accessed.

```python
def get_secure_credentials(connection_id: str) -> dict:
    """Securely retrieve connection credentials"""
    connection_config_service = ConnectionConfigurationService()

    # Get encrypted credentials from database
    config_entries = connection_config_service.get_config_by_id(
        connection_id,
        ["api_token", "username", "password"]
    )

    credentials = {}
    for entry in config_entries:
        # Decrypt credential values
        decrypted_value = decrypt_credential(entry.value)
        credentials[entry.key] = decrypted_value

    return credentials

def encrypt_credential(value: str) -> str:
    """Encrypt credential for storage"""
    encryption_key = get_secret("CREDENTIAL_ENCRYPTION_KEY")
    cipher = Fernet(encryption_key)
    return cipher.encrypt(value.encode()).decode()

def decrypt_credential(encrypted_value: str) -> str:
    """Decrypt credential for use"""
    encryption_key = get_secret("CREDENTIAL_ENCRYPTION_KEY")
    cipher = Fernet(encryption_key)
    return cipher.decrypt(encrypted_value.encode()).decode()
```

This comprehensive autosync system ensures reliable, secure, and efficient synchronization of content from multiple sources while maintaining system performance and data integrity.
