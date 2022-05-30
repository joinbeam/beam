FROM node:16-alpine

RUN mkdir -p /packages/landing/ && chown -R node:node /packages/landing
WORKDIR /packages/landing
COPY --chown=node:node . .

USER node

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
