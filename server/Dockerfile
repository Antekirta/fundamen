FROM node:18
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build
