#!/bin/sh

cogov--docker-compose--build
# shellcheck disable=SC2039
declare -i COUNT
# shellcheck disable=SC2039
declare -i SCALE
COUNT=$(echo "$RUNNING_CONTAINER_ID" | awk '{print NF}')
SCALE="(( $COUNT + 1 ))"
docker compose -p cogov -f d.cogov.docker-compose.yml --project-directory . up -d --scale www="$SCALE" --force-recreate --no-deps
if [ -n "$RUNNING_CONTAINER_ID" ]; then
	sleep 5
	docker container stop "$RUNNING_CONTAINER_ID"
fi
docker system prune -f
