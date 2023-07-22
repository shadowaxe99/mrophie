Dockerfile:

```dockerfile
# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the frontend
RUN cd frontend && npm run build

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
```

Note: This Dockerfile assumes that the frontend code is located in the "frontend" directory and the backend code is located in the root directory of the project. Adjust the paths accordingly if your project structure is different.