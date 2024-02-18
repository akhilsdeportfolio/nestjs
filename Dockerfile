# Base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env .env.development ./

# Creates a "dist" folder with the production build
RUN yarn run build

# Expose the port on which the app will run
EXPOSE 3000:3000

# Start the server using the production build
CMD ["yarn", "run", "start"]