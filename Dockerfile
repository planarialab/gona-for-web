FROM node:alpine
LABEL maintainer="rhio.kim@gmail.com"

RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
RUN npm install --prod

COPY .next .next
COPY static static
COPY routes routes
COPY server.js server.js

ENV NODE_ENV 'production'

EXPOSE 3000

CMD ["node", "server"]