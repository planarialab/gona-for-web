FROM node:alpine
MAINTAINER rhio.kim@gmail.com

RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
RUN npm install --prod

COPY .next .next
COPY static static

ENV NODE_ENV 'production'

EXPOSE 3000

CMD ["npm", "start"]