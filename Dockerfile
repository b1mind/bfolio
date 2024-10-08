# # Node build and run environment
# FROM node:18.13 as builder
# RUN mkdir /usr/src/app
# ARG GIT_TOKEN
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY . /usr/src/app
# RUN npm install
# RUN rm -f .npmrc
# EXPOSE 3000
# RUN npm run build
# CMD ["node", "./build/index.js"]

# Use for static prod
# build environment
FROM socialengine/nginx-spa:latest 
ARG GIT_TOKEN
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN rm -f .npmrc
RUN npm run build
COPY ./build /app

# production environment
RUN chmod -R 777 /app