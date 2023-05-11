# Use an official Node.js runtime as the base image
FROM node:14

# Set the image name
LABEL app="video-game-store"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Set the command to run the app when the container starts
CMD [ "node", "app.js" ]
