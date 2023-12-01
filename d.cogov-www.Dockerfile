FROM oven/bun
ARG USER
ARG UID=1000
ARG GID
WORKDIR /app
EXPOSE 4020

CMD ["bun", "-b", "./server/entry.mjs"]
