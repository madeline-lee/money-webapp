FROM node:lts-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install express --save && npm install 

EXPOSE 5000

CMD ["npm", "start"]

