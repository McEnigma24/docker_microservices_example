FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x docker_start.sh
RUN chmod +x add_new_record.sh
EXPOSE 3000

CMD ["./docker_start.sh"]
# CMD ["ls", "-al"]
