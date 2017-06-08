FROM node:4.5

RUN mkdir /application
WORKDIR /application

COPY ./index.js .

CMD ["node", "./index.js"]
