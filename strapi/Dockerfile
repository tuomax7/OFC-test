# Base image for Strapi
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose Strapi's default port
EXPOSE 1337

# Build and run the application
RUN npm run build
CMD ["npm", "run", "start"]