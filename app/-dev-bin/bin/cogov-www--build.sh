#!/bin/sh

$(dirname $0)/_env__validate.sh
RC=$?
if [ $RC -ne 0 ] ; then
	exit $RC
fi
npm i -g pnpm
pnpm i -r --force; pnpm prune; pnpm i -r --force
pnpm --filter @cogov/cogov.me build
