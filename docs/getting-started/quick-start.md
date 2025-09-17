# Quick Start Tutorial

Get up and running with Eesel AI in under 15 minutes. This tutorial will guide you through setting up your first knowledge base and configuring automatic synchronization.

## Overview

In this tutorial, you'll:

1. Set up your first namespace
2. Configure a data source (Zendesk or website)
3. Run your first synchronization
4. Test AI-powered search functionality
5. Set up automated synchronization

## Prerequisites

* Eesel AI installed and running ([Installation Guide](installation.md))
* Access to one of the following data sources:
  * Zendesk instance with API access
  * Website with publicly accessible content
  * Intercom help center
  * Confluence instance

## Step 1: Create Your First Namespace

A namespace is a isolated environment for your knowledge base. Let's create one:

### Using the Web Interface

1. Open your browser and navigate to `http://localhost:3000`
2. Click **"Create New Namespace"**
3. Fill in the details:
   * **Name**: "My Company Knowledge Base"
   * **Description**: "Central repository for customer support content"
   * **Type**: "Support Knowledge Base"
4. Click **"Create Namespace"**

### Using the API

Alternatively, create a namespace via API:

```bash
curl -X POST http://localhost:5000/api/namespaces \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "My Company Knowledge Base",
    "description": "Central repository for customer support content",
    "type": "support"
  }'
```

Expected response:

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "My Company Knowledge Base",
  "status": "active",
  "created_at": "2025-09-17T10:00:00Z"
}
```

## Step 2: Configure Your First Data Source

Let's configure a Zendesk help center as your data source:

### Option A: Zendesk Help Center

1. **Get your Zendesk URL and API credentials**:
   * Zendesk URL: `https://yourcompany.zendesk.com/hc`
   * API Token: Generate from Zendesk Admin → Channels → API
2. **Configure the source**:

```bash
curl -X POST http://localhost:5000/api/sources \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "type": "zendesk",
    "name": "Company Help Center",
    "config": {
      "url": "https://yourcompany.zendesk.com/hc",
      "auth_header": "Basic YOUR_BASE64_ENCODED_CREDENTIALS",
      "sync_frequency": "daily"
    }
  }'
```

### Option B: Website Sitemap

For a website-based knowledge base:

```bash
curl -X POST http://localhost:5000/api/sources \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "type": "sitemap",
    "name": "Company Website",
    "config": {
      "url": "https://yourcompany.com",
      "include_patterns": ["/docs/*", "/help/*", "/support/*"],
      "exclude_patterns": ["/admin/*", "/private/*"]
    }
  }'
```

## Step 3: Run Your First Synchronization

Now let's sync data from your configured source:

### Trigger Manual Sync

```bash
curl -X POST http://localhost:5000/api/sync/trigger \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "source_type": "zendesk",
    "sync_type": "full"
  }'
```

### Monitor Sync Progress

Check the sync status:

```bash
curl -X GET http://localhost:5000/api/sync/status/123e4567-e89b-12d3-a456-426614174000 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Expected response:

```json
{
  "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
  "status": "running",
  "progress": 65,
  "total_documents": 150,
  "processed_documents": 98,
  "estimated_completion": "2025-09-17T10:15:00Z"
}
```

### Web Interface Monitoring

You can also monitor progress in the web interface:

1. Navigate to `http://localhost:3000/dashboard`
2. Select your namespace
3. Click on the **"Sync Status"** tab
4. View real-time progress and logs

## Step 4: Test AI-Powered Search

Once synchronization is complete, test the search functionality:

### Basic Search Query

```bash
curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "query": "How do I reset my password?",
    "limit": 5
  }'
```

Expected response:

```json
{
  "results": [
    {
      "id": "doc_001",
      "title": "Password Reset Guide",
      "content": "To reset your password, follow these steps...",
      "source": "zendesk",
      "url": "https://yourcompany.zendesk.com/hc/articles/123456789",
      "relevance_score": 0.95,
      "last_updated": "2025-09-15T14:30:00Z"
    }
  ],
  "total_results": 12,
  "query_time_ms": 45
}
```

### Advanced Search with Filters

```bash
curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "query": "billing issues",
    "filters": {
      "source_type": ["zendesk"],
      "last_updated": "2025-09-01T00:00:00Z",
      "categories": ["billing", "payments"]
    },
    "limit": 10
  }'
```

### Web Interface Search

Test search in the web interface:

1. Go to `http://localhost:3000/search`
2. Select your namespace
3. Enter a search query: "password reset"
4. Review the AI-powered results with relevance scoring

## Step 5: Set Up Automated Synchronization

Configure automatic synchronization to keep your knowledge base up-to-date:

### Schedule Daily Sync

```bash
curl -X POST http://localhost:5000/api/sync/schedule \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "schedule": {
      "frequency": "daily",
      "time": "02:00",
      "timezone": "UTC",
      "incremental": true
    }
  }'
```

### Configure Webhook Notifications

Set up webhooks to receive notifications about sync completion:

```bash
curl -X POST http://localhost:5000/api/webhooks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "url": "https://yourcompany.com/webhooks/eesel-sync",
    "events": ["sync.completed", "sync.failed"],
    "secret": "your_webhook_secret"
  }'
```

## Step 6: Advanced Configuration

### Set Up Multiple Sources

Add additional data sources to enrich your knowledge base:

```bash
# Add Intercom source
curl -X POST http://localhost:5000/api/sources \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "type": "intercom",
    "name": "Customer Chat Logs",
    "config": {
      "url": "https://yourcompany.intercom.com",
      "access_token": "YOUR_INTERCOM_ACCESS_TOKEN"
    }
  }'

# Add Confluence source
curl -X POST http://localhost:5000/api/sources \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "type": "confluence",
    "name": "Internal Documentation",
    "config": {
      "url": "https://yourcompany.atlassian.net/wiki",
      "username": "your_username",
      "api_token": "YOUR_CONFLUENCE_API_TOKEN",
      "spaces": ["SUPPORT", "DOCS"]
    }
  }'
```

### Configure Content Filtering

Set up filters to control what content gets indexed:

```bash
curl -X PUT http://localhost:5000/api/sources/SOURCE_ID/filters \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "include_patterns": [
      "*/help/*",
      "*/support/*",
      "*/documentation/*"
    ],
    "exclude_patterns": [
      "*/internal/*",
      "*/admin/*"
    ],
    "content_filters": {
      "min_word_count": 50,
      "exclude_languages": ["de", "fr"],
      "include_categories": ["public", "customer-facing"]
    }
  }'
```

## Verification and Testing

### System Health Check

Verify all components are working correctly:

```bash
# Check overall system health
curl -X GET http://localhost:5000/api/health \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Check specific namespace health
curl -X GET http://localhost:5000/api/namespaces/123e4567-e89b-12d3-a456-426614174000/health \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Performance Testing

Test search performance with various queries:

```bash
# Simple query
time curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"namespace_id": "123e4567-e89b-12d3-a456-426614174000", "query": "login"}'

# Complex query
time curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "namespace_id": "123e4567-e89b-12d3-a456-426614174000",
    "query": "troubleshoot billing payment failed transaction error",
    "filters": {"source_type": ["zendesk", "intercom"]},
    "limit": 20
  }'
```

## Next Steps

Congratulations! You've successfully set up your first Eesel AI knowledge base. Here's what to explore next:

### 1. **Explore Advanced Features**

* Set up AI-powered chat responses
* Configure custom content processors
* Implement advanced search filters

### 2. **Integration**

* Integrate with your existing helpdesk system
* Set up Slack/Teams bot integration
* Configure email notification systems

### 3. **Scaling**

* Add more data sources
* Create multiple namespaces for different teams
* Set up monitoring and alerting

### 4. **Customization**

* Customize the search ranking algorithm
* Implement custom content extractors
* Configure brand-specific UI themes

## Useful Resources

* [**Architecture Overview**](../architecture/system-overview.md): Understand how the system works
* [**API Reference**](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/api/endpoints.md): Complete API documentation
* [**Development Guide**](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/development/setup.md): Set up development environment
* [**Troubleshooting**](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/troubleshooting.md): Common issues and solutions

## Getting Help

If you run into issues:

1. Check the [**Troubleshooting Guide**](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/troubleshooting.md)
2. Review the [**FAQ**](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/faq.md)
3. Open an issue on [**GitHub**](https://github.com/eeselapp/slack/issues)
4. Join our [**Discord Community**](https://discord.gg/eesel-ai)

Happy knowledge building! 🚀
