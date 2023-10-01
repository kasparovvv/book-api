# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install


ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install  --only=production; \ 
        fi

# Bundle your app source code inside the Docker image
COPY . ./

# Expose the port your app will run on
EXPOSE 3000

# Specify the command to run your application
#CMD ["npm","run","start"]
CMD ["node","index.js"]