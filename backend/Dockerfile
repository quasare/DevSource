FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY . .

RUN npm install


EXPOSE 5000
CMD [ "node", "server.js" ]