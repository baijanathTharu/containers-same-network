FROM node:lts-alpine

WORKDIR /usr/src/server

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 4444

CMD ["node", "index.js"]