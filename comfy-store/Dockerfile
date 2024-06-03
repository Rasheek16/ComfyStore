FROM node

# Set the working directory inside the container
WORKDIR /comfy-store

EXPOSE 8080 3000
# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 80 (or the port your application actually runs on)

# Run the application
CMD ["npm", "run", "dev"]
