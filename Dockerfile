# Use the official image as a parent image
FROM node:lts

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the app dependencies
RUN npm install

# Start the app
CMD ["npm", "start"]