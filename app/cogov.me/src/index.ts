import { css__replace__plugin_ } from '@cogov/css'
import { import_meta_env_ } from '@ctx-core/env'
import { dirname, join, resolve } from 'path'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app_ctx, browser__build, cwd__set, port__set, server__build } from 'relysjs'
const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
port__set(app_ctx, port)
cwd__set(app_ctx, resolve(join(dirname(new URL(import.meta.url).pathname), '..')))
const css__replace__plugin = css__replace__plugin_()
relement__use(server__relement)
await browser__build()
await server__build({
	external:['/assets/*', 'relementjs'],
	plugins: [css__replace__plugin]
})
console.info(`cogov.me server started on port ${port}`)
