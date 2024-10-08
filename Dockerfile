# Node build and run environment
# FROM node:18.13 as builder
FROM node:22-slim as builder
RUN mkdir /usr/src/app
ARG GIT_TOKEN
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN rm -f .npmrc
EXPOSE 3000
RUN npm run build
CMD ["node", "./build/index.js"]

#todo fix multipage app static host
# Use for static prod
# FROM node:22-slim as builder
# ARG GIT_TOKEN
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build
# RUN rm -rf /etc/nginx/conf.d
# RUN mkdir -p /etc/nginx/conf.d
# COPY ./default.conf /etc/nginx/conf.d/

# #env
# FROM nginx:1.13.9-alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]