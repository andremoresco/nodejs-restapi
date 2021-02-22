FROM node:14.15.5-alpine3.10

WORKDIR /app

COPY package.json package.json
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000
RUN ls -l
ENTRYPOINT node ./server/app.js