FROM node:21-alpine

WORKDIR /react-app/

COPY /react-app/ /react-app/

RUN npm install

CMD ["npm", "start"]