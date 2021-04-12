FROM node:12-alpine
RUN npm install
COPY *.js .
EXPOSE 8080
CMD [ "node", "server.js" ]
