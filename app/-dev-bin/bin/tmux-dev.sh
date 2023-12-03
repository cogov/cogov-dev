#!/bin/sh
DIR_DEFAULT=~/work/cogov/cogov-dev
DIR="${DIR:-$DIR_DEFAULT}"
APP_DIR=$DIR/app/cogov.me

tmux rename-session cogov-dev

cd $DIR
tmux rename-window cogov-dev
tmux split-window -h $SHELL
tmux select-pane -t 0
cd $APP_DIR
tmux split-window -v $SHELL
tmux send-keys 'bun -b run dev' C-m
cd $DIR
tmux select-pane -t 1
tmux split-window -v $SHELL
tmux send-keys 'tig' C-m
tmux select-pane -t 1

tmux select-window -t 1
