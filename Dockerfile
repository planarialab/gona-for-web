FROM node:9
MAINTAINER rhio@titicaca-corp.com

# RUN mkdir -p /app
# WORKDIR /app

# COPY package.json ./
# RUN npm install --production
# COPY dist/ ./dist/
# COPY config/ ./config/
# COPY protos/ ./protos/

EXPOSE 3000

CMD ["npm", "start"]