#!/bin/sh

cogov--docker-compose--build
cogov-www--docker-compose--restart
docker system prune -f
