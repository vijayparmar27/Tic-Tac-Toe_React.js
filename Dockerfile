# Step 1: Build stage
FROM node:14.16.0-alpine3.13 AS build-stage
WORKDIR /app
COPY package*.json ./
USER root
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production
FROM nginx:1.12-alpine
USER root
RUN addgroup -S app && adduser -S -G app app
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /app/build .
RUN chown -R app:app /usr/share/nginx/html /var/cache/nginx /var/run
# Expose port 80
EXPOSE 80
# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
