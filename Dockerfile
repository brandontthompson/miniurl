FROM node:latest
LABEL name="uwaa.moe"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
    npm install -g npm@7.20.6

COPY . .

EXPOSE 5231

CMD [ "node", "index.js" ]