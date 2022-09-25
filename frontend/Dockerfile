# pull official base image
FROM node:16 as builder

# # set working directory
# WORKDIR /app


# install app dependencies
COPY package.json package-lock.json ./

RUN npm install  --legacy-peer-deps && mkdir /n-react && mv ./node_modules ./n-react

WORKDIR /n-react

# add app
COPY . .

RUN npm run build

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /n-react/build /usr/share/nginx/html

EXPOSE 3000 80

# start app


ENTRYPOINT ["nginx", "-g", "daemon off;"]