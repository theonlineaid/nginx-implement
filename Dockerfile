# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy the content of the 'bootstrap' directory into the Nginx HTML directory
COPY . /usr/share/nginx/html/
