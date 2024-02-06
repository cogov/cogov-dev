#!/bin/sh

_env__validate
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
docker compose -p cogov -f d.cogov.docker-compose.yml --project-directory . up -d
