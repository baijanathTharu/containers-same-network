# BUILD STAGE
FROM node:lts-alpine as BUILD_STAGE

WORKDIR /usr/app/client

COPY package.json ./
COPY yarn.lock ./

ARG NEXT_PUBLIC_BACKEND_URI

RUN yarn

COPY . .

RUN yarn build

# PROD STAGE
FROM node:lts-alpine as PROD_STAGE

WORKDIR /usr/app/client

COPY --from=BUILD_STAGE /usr/app/client/.next .next
COPY --from=BUILD_STAGE /usr/app/client/node_modules node_modules
COPY --from=BUILD_STAGE /usr/app/client/package.json package.json

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]
