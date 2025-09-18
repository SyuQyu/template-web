# Configuration

This guide covers all configuration options available in Eesel AI, from basic setup to advanced customization.

## Configuration Overview

Eesel AI uses a combination of environment variables, configuration files, and database settings to manage its behavior. Configuration is organized into several categories:

* **Environment Configuration**: Core system settings
* **Database Configuration**: Data storage and connection settings
* **Source Configuration**: Data source connection settings
* **AI Configuration**: LLM and AI service settings
* **Security Configuration**: Authentication and authorization
* **Performance Configuration**: Caching, rate limiting, and optimization

## Environment Variables

### Core Application Settings

```bash
# Application Environment
FLASK_ENV=production                    # development, staging, production
DEBUG=false                            # Enable debug mode (never use in production)
PORT=5000                             # Application port
HOST=0.0.0.0                          # Application host

# Application URLs
BASE_URL=https://your-domain.com       # Base URL for the application
FRONTEND_URL=https://app.your-domain.com  # Frontend application URL
API_BASE_URL=https://api.your-domain.com  # API base URL
```

### Database Configuration

```bash
# PostgreSQL Database
DATABASE_URL=postgresql://username:password@host:port/database
DB_POOL_SIZE=20                        # Connection pool size
DB_POOL_TIMEOUT=30                     # Connection timeout in seconds
DB_POOL_RECYCLE=3600                   # Connection recycle time in seconds

# Redis Configuration
REDIS_URL=redis://host:port/database
REDIS_POOL_SIZE=50                     # Redis connection pool size
REDIS_TIMEOUT=30                       # Redis operation timeout
```

### AWS Services Configuration

```bash
# AWS General
AWS_REGION=us-east-1                   # AWS region
AWS_ACCESS_KEY_ID=your_access_key      # AWS access key
AWS_SECRET_ACCESS_KEY=your_secret_key  # AWS secret key

# SQS Configuration
EESEL_SQS_SYNCHRONISER_QUEUE_URL=https://sqs.region.amazonaws.com/account/queue
SQS_VISIBILITY_TIMEOUT=300             # Message visibility timeout
SQS_MAX_RECEIVE_COUNT=3                # Maximum retry attempts

# S3 Configuration
AWS_S3_BUCKET=eesel-ai-storage         # S3 bucket for file storage
S3_REGION=us-east-1                    # S3 region
S3_PRESIGNED_URL_EXPIRY=3600           # Presigned URL expiry time
```

### AI and LLM Configuration

```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key     # OpenAI API key
OPENAI_MODEL=gpt-4                     # Default OpenAI model
OPENAI_MAX_TOKENS=2048                 # Maximum tokens per request
OPENAI_TEMPERATURE=0.7                 # Response creativity (0.0-1.0)

# Anthropic Configuration
ANTHROPIC_API_KEY=your_anthropic_key   # Anthropic API key
ANTHROPIC_MODEL=claude-3-sonnet        # Default Anthropic model

# Embedding Configuration
EMBEDDING_MODEL=text-embedding-ada-002  # Embedding model
EMBEDDING_DIMENSION=1536               # Embedding vector dimension
```

### Security Configuration

```bash
# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key  # JWT signing key
JWT_EXPIRY_HOURS=24                    # JWT token expiry
JWT_REFRESH_EXPIRY_DAYS=30             # Refresh token expiry

# CORS Configuration
CORS_ORIGINS=https://your-domain.com,https://app.your-domain.com
CORS_ALLOW_CREDENTIALS=true            # Allow credentials in CORS

# Rate Limiting
RATE_LIMIT_PER_MINUTE=100              # API requests per minute per IP
RATE_LIMIT_BURST=20                    # Burst rate limit
```

### Monitoring and Logging

```bash
# Logging Configuration
LOG_LEVEL=INFO                         # DEBUG, INFO, WARNING, ERROR, CRITICAL
LOG_FORMAT=json                        # json, text
LOG_FILE=/var/log/eesel-ai/app.log     # Log file path

# Sentry Configuration
SENTRY_DSN=your_sentry_dsn             # Sentry error tracking
SENTRY_ENVIRONMENT=production          # Environment name for Sentry

# Metrics Configuration
METRICS_ENABLED=true                   # Enable metrics collection
METRICS_PORT=9090                      # Prometheus metrics port
```

## Configuration Files

### Application Configuration (config.yaml)

Create a `config.yaml` file in your application root:

```yaml
# Application Configuration
app:
  name: "Eesel AI"
  version: "2.0.0"
  environment: "production"

  # Feature Flags
  features:
    enable_ai_responses: true
    enable_auto_sync: true
    enable_analytics: true
    enable_webhooks: true

  # Performance Settings
  performance:
    max_concurrent_jobs: 10
    sync_batch_size: 100
    search_timeout_seconds: 30
    cache_ttl_seconds: 3600

# Data Source Configuration
sources:
  zendesk:
    rate_limit: 700 # API calls per minute
    timeout: 30 # Request timeout in seconds
    retry_attempts: 3

  intercom:
    rate_limit: 1000
    timeout: 30
    retry_attempts: 3

  sitemap:
    max_pages: 10000
    concurrent_requests: 5
    timeout: 30

  confluence:
    rate_limit: 100
    timeout: 45
    retry_attempts: 3

# Search Configuration
search:
  default_limit: 10
  max_limit: 100
  min_score_threshold: 0.3

  # Ranking Weights
  ranking:
    content_relevance: 0.6
    freshness: 0.2
    popularity: 0.1
    source_priority: 0.1

# AI Configuration
ai:
  # Response Generation
  response_generation:
    max_context_length: 4000
    response_max_length: 500
    temperature: 0.7

  # Content Processing
  content_processing:
    chunk_size: 1000
    chunk_overlap: 200
    min_chunk_size: 100

  # Embeddings
  embeddings:
    batch_size: 100
    retry_attempts: 3
```

### Synchronization Configuration

```yaml
# sync-config.yaml
synchronization:
  # Default Sync Settings
  defaults:
    frequency: "daily"
    time: "02:00"
    timezone: "UTC"
    incremental: true

  # Static Job Configuration
  static_jobs:
    enabled: true
    schedule: "0 2 * * *" # Daily at 2 AM

  # Dynamic Job Configuration
  dynamic_jobs:
    enabled: true
    max_namespaces_per_hour: 100

  # Error Handling
  error_handling:
    max_retries: 3
    retry_delay_seconds: 30
    dead_letter_queue_enabled: true

  # Performance
  performance:
    max_concurrent_syncs: 5
    batch_processing_size: 50
    memory_limit_mb: 1024
```

## Database Configuration

### Connection Pool Settings

```python
# Database pool configuration
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_size': 20,
    'pool_timeout': 30,
    'pool_recycle': 3600,
    'pool_pre_ping': True,
    'connect_args': {
        'application_name': 'eesel-ai',
        'options': '-c timezone=UTC'
    }
}
```

### Migration Settings

```bash
# Database migration configuration
ALEMBIC_CONFIG=alembic.ini
AUTO_MIGRATE=true                      # Automatically run migrations on startup
MIGRATION_TIMEOUT=300                  # Migration timeout in seconds
```

## Source-Specific Configuration

### Zendesk Configuration

```yaml
zendesk:
  # Authentication
  auth_type: "api_token" # api_token, oauth, basic

  # Sync Settings
  sync:
    include_sections: ["all"]
    exclude_sections: ["internal", "draft"]
    include_locales: ["en-us", "en"]
    article_limit: null # null for unlimited

  # Content Processing
  processing:
    extract_attachments: true
    process_html: true
    extract_metadata: true

  # Rate Limiting
  rate_limiting:
    requests_per_minute: 700
    burst_limit: 10
```

### Website/Sitemap Configuration

```yaml
sitemap:
  # Crawling Settings
  crawling:
    follow_redirects: true
    max_redirects: 5
    user_agent: "Eesel-AI-Bot/2.0"
    respect_robots_txt: true

  # Content Filtering
  filtering:
    min_content_length: 100
    max_content_length: 50000
    allowed_content_types:
      - "text/html"
      - "application/pdf"
      - "text/plain"

  # Performance
  performance:
    concurrent_requests: 5
    request_timeout: 30
    max_pages_per_domain: 10000
```

### Intercom Configuration

```yaml
intercom:
  # API Settings
  api:
    version: "2.0"
    timeout: 30

  # Content Types
  content_types:
    articles: true
    collections: true
    conversations: false # Privacy consideration

  # Processing
  processing:
    extract_tags: true
    process_rich_text: true
    include_author_info: true
```

## Security Configuration

### Authentication Settings

```yaml
authentication:
  # JWT Settings
  jwt:
    algorithm: "HS256"
    issuer: "eesel-ai"
    audience: "eesel-ai-api"

  # OAuth Providers
  oauth:
    google:
      client_id: "your_google_client_id"
      client_secret: "your_google_client_secret"
      scopes: ["openid", "email", "profile"]

    microsoft:
      client_id: "your_microsoft_client_id"
      client_secret: "your_microsoft_client_secret"
      tenant_id: "your_tenant_id"

  # API Key Authentication
  api_keys:
    enabled: true
    header_name: "X-API-Key"
    rate_limit_per_key: 1000
```

### Data Privacy Settings

```yaml
privacy:
  # Data Retention
  retention:
    sync_logs_days: 90
    search_logs_days: 30
    user_sessions_days: 7

  # Data Anonymization
  anonymization:
    anonymize_user_data: true
    hash_ip_addresses: true
    remove_pii: true

  # Encryption
  encryption:
    encrypt_at_rest: true
    encryption_key_rotation_days: 90
```

## Performance Configuration

### Caching Settings

```yaml
caching:
  # Redis Cache
  redis:
    default_ttl: 3600
    search_results_ttl: 1800
    user_sessions_ttl: 86400

  # Application Cache
  application:
    max_memory_mb: 512
    cleanup_interval_seconds: 300

  # CDN Settings
  cdn:
    enabled: true
    cache_control_max_age: 86400
    static_assets_ttl: 604800
```

### Rate Limiting Configuration

```yaml
rate_limiting:
  # Global Limits
  global:
    requests_per_minute: 1000
    requests_per_hour: 10000

  # Per-User Limits
  per_user:
    requests_per_minute: 100
    search_requests_per_minute: 60

  # Per-API-Key Limits
  per_api_key:
    requests_per_minute: 500
    requests_per_hour: 5000

  # Burst Handling
  burst:
    enabled: true
    burst_size: 20
    burst_refill_rate: 1
```

## Monitoring Configuration

### Health Check Settings

```yaml
health_checks:
  # Endpoint Configuration
  endpoint: "/health"
  detailed_endpoint: "/health/detailed"

  # Check Intervals
  intervals:
    database: 30
    redis: 30
    external_apis: 300

  # Thresholds
  thresholds:
    response_time_ms: 1000
    error_rate_percent: 5
    queue_depth: 1000
```

### Metrics Configuration

```yaml
metrics:
  # Prometheus Settings
  prometheus:
    enabled: true
    port: 9090
    path: "/metrics"

  # Custom Metrics
  custom_metrics:
    - name: "sync_duration_seconds"
      type: "histogram"
      buckets: [1, 5, 10, 30, 60, 300, 600]

    - name: "search_requests_total"
      type: "counter"
      labels: ["namespace", "source_type"]

    - name: "active_syncs"
      type: "gauge"
```

## Environment-Specific Configurations

### Development Environment

```bash
# .env.development
FLASK_ENV=development
DEBUG=true
LOG_LEVEL=DEBUG
RATE_LIMIT_PER_MINUTE=1000  # Higher limits for development
ENABLE_AUTO_SYNC=false      # Disable auto-sync in development
```

### Staging Environment

```bash
# .env.staging
FLASK_ENV=staging
DEBUG=false
LOG_LEVEL=INFO
SENTRY_ENVIRONMENT=staging
ENABLE_AUTO_SYNC=true
```

### Production Environment

```bash
# .env.production
FLASK_ENV=production
DEBUG=false
LOG_LEVEL=WARNING
SENTRY_ENVIRONMENT=production
ENABLE_AUTO_SYNC=true
RATE_LIMIT_PER_MINUTE=100
```

## Configuration Validation

### Startup Validation

Eesel AI validates configuration on startup. Create a `validate_config.py` script:

```python
import os
import sys
from typing import List, Dict

def validate_required_env_vars() -> List[str]:
    """Validate required environment variables"""
    required_vars = [
        'DATABASE_URL',
        'REDIS_URL',
        'JWT_SECRET_KEY',
        'AWS_REGION',
        'OPENAI_API_KEY'
    ]

    missing_vars = []
    for var in required_vars:
        if not os.environ.get(var):
            missing_vars.append(var)

    return missing_vars

def validate_config_values() -> List[str]:
    """Validate configuration values"""
    errors = []

    # Validate JWT secret length
    jwt_secret = os.environ.get('JWT_SECRET_KEY', '')
    if len(jwt_secret) < 32:
        errors.append("JWT_SECRET_KEY must be at least 32 characters long")

    # Validate database URL format
    db_url = os.environ.get('DATABASE_URL', '')
    if not db_url.startswith('postgresql://'):
        errors.append("DATABASE_URL must be a PostgreSQL connection string")

    return errors

if __name__ == "__main__":
    missing_vars = validate_required_env_vars()
    config_errors = validate_config_values()

    if missing_vars:
        print("Missing required environment variables:")
        for var in missing_vars:
            print(f"  - {var}")

    if config_errors:
        print("Configuration errors:")
        for error in config_errors:
            print(f"  - {error}")

    if missing_vars or config_errors:
        sys.exit(1)

    print("Configuration validation passed!")
```

## Best Practices

### Security Best Practices

1. **Use strong secrets**: Generate cryptographically secure random strings for JWT secrets
2. **Rotate credentials**: Regularly rotate API keys and secrets
3. **Principle of least privilege**: Grant minimal necessary permissions
4. **Environment separation**: Use different credentials for different environments

### Performance Best Practices

1. **Connection pooling**: Configure appropriate database connection pools
2. **Caching strategy**: Implement multi-layer caching (Redis, application, CDN)
3. **Rate limiting**: Implement progressive rate limiting
4. **Resource limits**: Set appropriate memory and CPU limits

### Operational Best Practices

1. **Configuration management**: Use configuration management tools (Ansible, Terraform)
2. **Secret management**: Use dedicated secret management services (AWS Secrets Manager, HashiCorp Vault)
3. **Monitoring**: Implement comprehensive monitoring and alerting
4. **Documentation**: Keep configuration documentation up-to-date

## Troubleshooting Configuration Issues

### Common Configuration Problems

1.  **Database connection failures**:

    ```bash
    # Test database connection
    python -c "from app.config.database import get_db; print('DB OK')"
    ```
2.  **Redis connection issues**:

    ```bash
    # Test Redis connection
    redis-cli -u $REDIS_URL ping
    ```
3.  **AWS service access**:

    ```bash
    # Test AWS credentials
    aws sts get-caller-identity
    ```
4.  **JWT configuration**:

    ```bash
    # Validate JWT secret
    python -c "
    import os
    secret = os.environ.get('JWT_SECRET_KEY')
    print(f'JWT secret length: {len(secret) if secret else 0}')
    print('Strong enough:' if len(secret or '') >= 32 else 'Too weak')
    "
    ```

For more troubleshooting help, see the [Troubleshooting Guide](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/troubleshooting.md).
