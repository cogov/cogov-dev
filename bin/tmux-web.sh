#!/bin/sh
DIR_DEFAULT=~/work/cogov/cogov-dev
DIR="${DIR:-$DIR_DEFAULT}"

tmux rename-session cogov-dev

cd $DIR
tmux rename-window cogov-dev
tmux send-keys 'nvm use' C-m
cd $DIR/packages/-home
tmux split-window -h $SHELL
tmux send-keys 'nvm use' C-m
tmux send-keys 'npm run dev' C-m
cd $DIR
tmux split-window -v $SHELL
tmux send-keys 'nvm use' C-m
tmux send-keys 'tig' C-m
tmux select-pane -t 0

cd $DIR/packages/-home/static/assets
tmux new-window
tmux rename-window assets
tmux split-window -v $SHELL
tmux select-pane -t 0

tmux select-window -t 0
