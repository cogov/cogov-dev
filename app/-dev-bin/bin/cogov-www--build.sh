#!/bin/sh

_env__validate
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
pnpm i -r; pnpm prune; pnpm i -r
(cd app/cogov.me && bun -b run build)
