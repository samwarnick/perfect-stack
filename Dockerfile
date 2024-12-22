FROM oven/bun:1 AS base
WORKDIR /usr/src/app

COPY . .

RUN bun install --frozen-lockfile --production

ENV NODE_ENV=production

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "prod" ]

LABEL org.opencontainers.image.source https://github.com/samwarnick/perfect-stack
