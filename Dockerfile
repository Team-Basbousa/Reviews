FROM node

WORKDIR /app 

COPY package.json .

RUN npm install 

COPY . . 

EXPOSE 5001 

RUN npm install -g nodemon 

CMD [ "nodemon", "server.js" ] 