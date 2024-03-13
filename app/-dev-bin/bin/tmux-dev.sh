#!/bin/sh
DIR_DEFAULT=~/work/cogov/cogov-dev
DIR="${DIR:-$DIR_DEFAULT}"
APP_DIR=$DIR/app/cogov.me
WINDOW_NAME=cogov-dev
SESSION_NAME=$WINDOW_NAME

tmux rename-session $SESSION_NAME

cd $DIR
tmux rename-window $WINDOW_NAME
tmux split-window -v $SHELL
tmux send-keys 'tig' 'C-m'
tmux split-window -h $SHELL
tmux select-pane -t 1
tmux split-window -h $SHELL
cd $APP_DIR
tmux send-keys 'bun -b run dev' C-m
tmux select-pane -t 1
