#!/bin/bash

# Heroku Deployment Script

# Set up Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Log in to Heroku
heroku login

# Create a new Heroku app
heroku create

# Set up environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=<your_mongodb_uri>
heroku config:set WHISPER_API_KEY=<your_whisper_api_key>

# Deploy the backend server
cd backend
heroku container:push web --app <your_heroku_app_name>
heroku container:release web --app <your_heroku_app_name>

# Deploy the frontend app
cd ../frontend
heroku container:push web --app <your_heroku_app_name>
heroku container:release web --app <your_heroku_app_name>

# Open the deployed app in the browser
heroku open --app <your_heroku_app_name>

# Run database migrations (if applicable)
heroku run npm run migrate --app <your_heroku_app_name>

# Run any necessary setup scripts (if applicable)
heroku run npm run setup --app <your_heroku_app_name>

# Display logs
heroku logs --tail --app <your_heroku_app_name>

# End of deployment script