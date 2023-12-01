FROM node:current-alpine
ARG USER
ARG UID=1000
ARG GID
WORKDIR /app
EXPOSE 4009

CMD ["bun", "-b", "./server/entry.mjs"]
