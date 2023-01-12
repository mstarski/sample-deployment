FROM node:16 as base

ARG NAME=logs
ARG PROJECT=./apps/$NAME

WORKDIR /app

RUN mkdir -p ./apps/$NAME

COPY package.json ./
COPY package-lock.json ./

COPY $PROJECT/package.json $PROJECT/package.json

RUN npm ci --workspace $NAME

COPY $PROJECT $PROJECT

RUN cp $PROJECT/.env.example $PROJECT/.env
RUN (cd $PROJECT && npm run build)

# ===============================================

FROM node:16 as app

ARG NAME=logs
ARG PROJECT=/app/apps/$NAME

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base $PROJECT/dist .
COPY --from=base $PROJECT/.env .

CMD ["node", "index.js"]