FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npm install -g express-generator
RUN npm install express --save
COPY . .
CMD ["npm", "start"]
