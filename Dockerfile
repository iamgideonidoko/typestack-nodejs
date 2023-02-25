FROM node:16.15-alpine3.14 AS development

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

# Start the app
CMD [ "yarn", "server:prod" ]
