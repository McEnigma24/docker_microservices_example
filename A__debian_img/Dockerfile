FROM debian:latest

WORKDIR /app

RUN apt update -y && apt upgrade -y
RUN apt install figlet -y

COPY . .
RUN chmod +x ./print.sh

CMD ["./print.sh"]