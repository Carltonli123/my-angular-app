FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
CMD [ "npm", "start" ]
EXPOSE 4200:80