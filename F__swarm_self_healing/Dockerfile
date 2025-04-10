FROM node:14-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY app.js ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]