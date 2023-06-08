FROM node:16.14-slim
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn","start"]
