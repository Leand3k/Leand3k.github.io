FROM node:13.12.0-alpine

WORKDIR /oas-doc-portal

ENV PATH /oas-doc-portal/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]