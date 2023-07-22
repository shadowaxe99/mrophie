#!/bin/bash

# Auto Sorter with Universal Local Task Support - Deployment Script

# Define variables
APP_NAME="auto-sorter"
APP_VERSION="1.0.0"
AWS_REGION="us-west-2"
EC2_INSTANCE_ID="i-1234567890abcdef0"
EC2_KEY_PAIR="my-key-pair"
EC2_SECURITY_GROUP="my-security-group"
EC2_INSTANCE_TYPE="t2.micro"
DOCKER_IMAGE_NAME="auto-sorter:${APP_VERSION}"
DOCKER_COMPOSE_FILE="docker-compose.yml"

# Connect to EC2 instance
echo "Connecting to EC2 instance..."
ssh -i "${EC2_KEY_PAIR}.pem" ec2-user@${EC2_INSTANCE_ID} << EOF

# Update system packages
echo "Updating system packages..."
sudo yum update -y

# Install Docker
echo "Installing Docker..."
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Install Docker Compose
echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Clone Auto Sorter repository
echo "Cloning Auto Sorter repository..."
git clone https://github.com/your-username/auto-sorter.git
cd auto-sorter

# Build Docker image
echo "Building Docker image..."
docker build -t ${DOCKER_IMAGE_NAME} .

# Create Docker network
echo "Creating Docker network..."
docker network create auto-sorter-network

# Start Auto Sorter containers
echo "Starting Auto Sorter containers..."
docker-compose -f ${DOCKER_COMPOSE_FILE} up -d

EOF

echo "Deployment completed successfully."