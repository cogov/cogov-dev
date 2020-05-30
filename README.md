# cogov

CoGov fosters the emergence of coherent collective intelligence 
by enabling the rapid iteration of governance and social coordination systems that YOU design!

## Development

This library uses [lerna](https://lerna.js.org/) & [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
 to manage the monorepo.
 
To install the packages, run:

```shell
git clone git@github.com:cogov/cogov-dev.git
cd cogov-dev
git submodule init
git submodule update
# install nvm https://github.com/nvm-sh/nvm
nvm i
nvm use
npm i yarn
yarn
```

### tmux

If you use [tmux](https://github.com/tmux/tmux/wiki), take a look at the tmux scripts in the `bin` directory.

```shell
bin/tmux-web.sh
```

### cogov.tech site

```shell
cd packages/home
yarn run dev
```
