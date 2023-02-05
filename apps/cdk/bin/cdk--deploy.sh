#!/bin/sh
DIR="$(readlink -f $(dirname $0))"
echo $DIR
CDK_DIR="$(readlink -f "$DIR/..")"
WWW_DIR="$(readlink -f "$DIR/../../www")"
pushd $WWW_DIR
direnv allow
pnpm run build
popd
pushd $CDK_DIR
cdk synth
cdk deploy
popd
