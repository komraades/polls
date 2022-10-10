FROM node:16

WORKDIR /usr/src/app


COPY package.json ./
COPY yarn.lock ./

# RUN npm install

# for production build
RUN npm ci --only=production

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]
