FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x ./docker_start.sh
EXPOSE 3000

# CMD ["node", "app.js"]
CMD ["/bin/sh", "./docker_start.sh"]
