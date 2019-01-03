FROM node:11

WORKDIR /home/node/app

COPY src/ .
COPY package.json .
COPY package-lock.json .

RUN npm install

CMD npm run dev
