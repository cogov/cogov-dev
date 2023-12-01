#!/bin/sh

$(dirname $0)/_env__validate.sh
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
bun i
(cd app/cogov.me && bun -b run build)
