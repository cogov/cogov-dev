#!/bin/sh
DIR_DEFAULT=~/work/cogov/cogov-dev
DIR="${DIR:-$DIR_DEFAULT}"

tmux rename-session cogov-dev

cd $DIR
tmux rename-window cogov-dev
cd $DIR/app/cogov.me
tmux split-window -h $SHELL
tmux send-keys 'bun -b run dev' C-m
cd $DIR
tmux split-window -v $SHELL
tmux send-keys 'tig' C-m
tmux select-pane -t 0

tmux select-window -t 0
