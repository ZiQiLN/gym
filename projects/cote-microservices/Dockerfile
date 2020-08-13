FROM node:lts

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install
COPY . .

CMD ["node", "index.js"]