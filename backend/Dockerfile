FROM node:8

ENV PORT 8080

EXPOSE 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ./node_modules/.bin/tsc

CMD [ "npm", "start" ]
