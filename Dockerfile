# Dockerfile for NGINX
FROM nginx:1-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom NGINX configuration file
COPY ./nginx.prod.conf /etc/nginx/conf.d/nginx.prod.conf

# Expose port 80
EXPOSE 80

RUN mkdir /var/www;
RUN mkdir /var/www/static;
RUN touch /var/www/static/test.txt;

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
