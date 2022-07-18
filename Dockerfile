FROM node:17

WORKDIR /app

COPY package*.json ./


RUN npm install
RUN npm i -g sequelize-cli
RUN npm i -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "start"]