FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY . .

RUN npm install


EXPOSE 3001
CMD [ "node", "server.js" ]