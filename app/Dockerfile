# Use official Next.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package and lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
