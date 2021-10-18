FROM node:14.0.0-alpine

ARG NEXT_PUBLIC_SERVER_URL="localhost"
ARG NEXT_PUBLIC_TENANT_NAME="default"

COPY package*.json ./

RUN npm ci

COPY . .

RUN rm -rf .env

RUN npm run build

EXPOSE 8080

CMD npm run start