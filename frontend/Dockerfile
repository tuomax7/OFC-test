FROM node:lts-alpine3.19

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY *.json ./

RUN npm install

EXPOSE 3000

CMD [ "astro", "dev" ]
