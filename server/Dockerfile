FROM node:18

USER root

WORKDIR /app

# Копируйте файлы package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Копируйте исходные файлы проекта
COPY . .

RUN npm ci

CMD ["npm", "run", "start"]
