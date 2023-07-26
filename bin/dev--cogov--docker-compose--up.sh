#!/bin/sh

$(dirname $0)/_env__validate.sh
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
HOST=my.cogov.me docker compose -p cogov -f d.cogov.docker-compose.yml --project-directory . up -d
