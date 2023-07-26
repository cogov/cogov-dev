#!/bin/sh

cogov--docker-compose--build
cogov-www_site--docker-compose--restart
docker system prune -f
