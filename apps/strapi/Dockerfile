FROM node:20 AS base

WORKDIR /app

RUN yarn global add turbo@^2

COPY . .

RUN /usr/local/bin/turbo prune strapi --docker

FROM node:20-alpine AS builder

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /app

RUN yarn global add turbo@^2

COPY --from=base /app/out/json/ .

RUN yarn install --network-timeout 1000000

COPY --from=base /app/out/full/ .

RUN yarn workspace strapi run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN apk update
RUN apk add --no-cache vips-dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /app .

WORKDIR /app/apps/strapi

EXPOSE 1337

CMD [ "yarn", "start" ]
