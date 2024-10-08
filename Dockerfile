# # Node build and run environment
# # FROM node:18.13 as builder
# FROM node:22-slim as builder
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
FROM node:22-slim as builder
ARG GIT_TOKEN
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#env
FROM nginx:1.13.9-alpine
COPY --from=builder /app/build /var/www/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# FROM nginx:1-alpine-slim
# COPY --from=builder /app/build /app
# RUN chmod -R 777 /app