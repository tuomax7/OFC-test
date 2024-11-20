# Base image for Astro
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Astro app
RUN npm run build

# Expose Astro's default port
EXPOSE 3000

# Start the production server
CMD ["npm", "run", "preview"]