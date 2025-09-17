# Installation Guide

This guide will help you set up the Eesel AI platform on your local development environment or production server.

## Prerequisites

Before installing Eesel AI, ensure you have the following prerequisites:

### System Requirements

* **Operating System**: Linux (Ubuntu 20.04+ recommended), macOS 10.15+, or Windows 10+ with WSL2
* **Memory**: Minimum 8GB RAM (16GB recommended for production)
* **Storage**: At least 20GB free disk space
* **Network**: Internet connection for external API integrations

### Software Dependencies

* **Python**: Version 3.9 or higher
* **Node.js**: Version 16 or higher
* **Docker**: Latest stable version
* **Docker Compose**: Version 2.0 or higher
* **Redis**: Version 6.0 or higher
* **PostgreSQL**: Version 13 or higher

## Installation Methods

### Method 1: Docker Compose (Recommended)

The easiest way to get started is using Docker Compose:

```bash
# Clone the repository
git clone https://github.com/eeselapp/slack.git
cd slack

# Copy environment configuration
cp .env.example .env

# Edit the .env file with your configurations
vim .env

# Start all services
docker-compose up -d

# Verify installation
docker-compose ps
```

### Method 2: Manual Installation

For development or custom deployments:

#### 1. Clone the Repository

```bash
git clone https://github.com/eeselapp/slack.git
cd slack
```

#### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configurations

# Run database migrations
python manage.py migrate

# Start the server
python run.py
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

#### 4. Indexer Setup

```bash
# Navigate to indexer directory
cd indexer

# Install dependencies
pip install -r requirements.txt

# Start the indexer service
python run.py
```

## Environment Configuration

### Required Environment Variables

Create a `.env` file with the following variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/eesel_ai
REDIS_URL=redis://localhost:6379/0

# AWS Configuration (for SQS and S3)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
EESEL_SQS_SYNCHRONISER_QUEUE_URL=https://sqs.region.amazonaws.com/account/queue

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key

# External API Keys
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key

# Application Settings
FLASK_ENV=development
DEBUG=true
PORT=5000
```

### Optional Configuration

```bash
# Monitoring and Logging
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=INFO

# Feature Flags
ENABLE_AI_RESPONSES=true
ENABLE_AUTO_SYNC=true

# Rate Limiting
RATE_LIMIT_PER_MINUTE=100
```

## Database Setup

### PostgreSQL Setup

```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE eesel_ai;
CREATE USER eesel_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE eesel_ai TO eesel_user;
\q
```

### Redis Setup

```bash
# Install Redis (Ubuntu/Debian)
sudo apt install redis-server

# Start Redis service
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Test Redis connection
redis-cli ping
```

## AWS Services Setup

### SQS Queue Creation

```bash
# Create SQS queue for synchronization jobs
aws sqs create-queue --queue-name eesel-synchroniser-queue

# Get queue URL
aws sqs get-queue-url --queue-name eesel-synchroniser-queue
```

### S3 Bucket Setup

```bash
# Create S3 bucket for file storage
aws s3 mb s3://eesel-ai-storage --region us-east-1

# Configure bucket policies (optional)
aws s3api put-bucket-policy --bucket eesel-ai-storage --policy file://bucket-policy.json
```

## Verification

After installation, verify that all components are working:

### 1. Health Check

```bash
# Check backend health
curl http://localhost:5000/health

# Expected response:
# {"status": "healthy", "timestamp": "2025-09-17T10:00:00Z"}
```

### 2. Database Connection

```bash
# Test database connection
python -c "
from app.config.database import get_db
with get_db() as db:
    print('Database connection successful')
"
```

### 3. Redis Connection

```bash
# Test Redis connection
redis-cli ping
# Expected response: PONG
```

### 4. Queue Processing

```bash
# Check if worker processes are running
ps aux | grep synchroniser

# Check queue status
python -c "
import boto3
sqs = boto3.client('sqs')
print(sqs.get_queue_attributes(QueueUrl='your-queue-url'))
"
```

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

#### Database Connection Error

```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Reset database connection
sudo systemctl restart postgresql
```

#### Redis Connection Error

```bash
# Check Redis status
sudo systemctl status redis-server

# Restart Redis
sudo systemctl restart redis-server
```

#### Python Dependencies Issues

```bash
# Upgrade pip
pip install --upgrade pip

# Clear cache and reinstall
pip cache purge
pip install -r requirements.txt --force-reinstall
```

## Next Steps

After successful installation:

1. **Configure your first source**: Follow the [Quick Start Tutorial](quick-start.md)
2. **Set up authentication**: Configure OAuth providers and API keys
3. **Initialize data sync**: Start your first synchronization job
4. **Monitor system health**: Set up logging and monitoring

## Production Deployment

For production deployments, consider:

* **Load balancing**: Use nginx or AWS Application Load Balancer
* **SSL certificates**: Configure HTTPS with Let's Encrypt or AWS Certificate Manager
* **Monitoring**: Set up Sentry, DataDog, or CloudWatch monitoring
* **Backup strategy**: Regular database and file backups
* **Auto-scaling**: Configure horizontal pod autoscaling for Kubernetes deployments

## Support

If you encounter issues during installation:

* Check the [Troubleshooting Guide](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/troubleshooting.md)
* Review the [FAQ](https://github.com/eeselapp/slack/blob/gitbook-integration/docs/faq.md)
* Open an issue on [GitHub](https://github.com/eeselapp/slack/issues)
* Contact support for enterprise installations
