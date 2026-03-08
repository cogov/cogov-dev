# cogov

CoGov fosters the emergence of coherent collective intelligence
by enabling the rapid iteration of governance and social coordination systems that YOU design!

## Development

This project uses [bun](https://bun.sh/) workspaces to manage the monorepo.

To install and run:

```shell
git clone git@github.com:cogov/cogov-dev.git
cd cogov-dev
git submodule init
git submodule update
bun install
```

### cogov.me site

```shell
bun dev
```

### Production build & deploy

```shell
NODE_ENV=production bun build
NODE_ENV=production bun prerender
npx wrangler pages deploy dist/browser --project-name=cogov-me
```
