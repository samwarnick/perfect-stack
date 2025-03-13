FROM oven/bun:1.1.2-alpine AS base
WORKDIR /usr/src/app

COPY bun.lock .
COPY package.json .
COPY tsconfig.json .

RUN bun install --frozen-lockfile --production

COPY src ./src
RUN mkdir -p ./db
ENV ENV=production

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "prod" ]

LABEL org.opencontainers.image.source https://github.com/samwarnick/perfect-stack
