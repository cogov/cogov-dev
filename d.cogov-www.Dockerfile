FROM node:current-alpine
ARG USER
ARG UID=1000
ARG GID
WORKDIR /app
COPY app/cogov.me/dist ./
EXPOSE 4009

CMD ["node", "--enable-source-maps", "./server/entry.mjs"]
