FROM node:20.9-alpine as base

WORKDIR /app

COPY package*.json ./

COPY .npmrc .

RUN npm ci --only=production 

EXPOSE 3333

ENV PATH /app/node_modules/.bin:$PATH



# Development
FROM base as dev

ENV NODE_ENV=development

RUN npm ci --only=development

COPY . .



# Production build
FROM dev as build

RUN npm run build

RUN rm -rf src
RUN rm -rf test



# Production
FROM base as prod

COPY --from=build /app/ .

CMD ["node", "./dist/main.js"]
