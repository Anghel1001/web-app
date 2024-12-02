FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies and build tools (required for native modules like sqlite3)
RUN apt-get update && apt-get install -y build-essential python3

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies, including sqlite3 (will be rebuilt for the Linux environment)
RUN npm install

# Copy the rest of your code
COPY . .

# Expose the application port (if applicable)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
