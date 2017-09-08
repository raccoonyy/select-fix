FROM node:latest

WORKDIR /www/app

# npm install
ADD ./compose/node/start-dev.sh /www/

EXPOSE 4000

CMD ["/www/start-dev.sh"]
