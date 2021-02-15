FROM node:14.15.5-alpine3.10

WORKDIR /usr/src/app

COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ 'node', './server/app.js']