import { css__replace__plugin_ } from '@cogov/css'
import { import_meta_env_ } from '@ctx-core/env'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app_ctx, browser__build, port__set, server__build } from 'relysjs'
const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
port__set(app_ctx, port)
const css__replace__plugin = css__replace__plugin_()
relement__use(server__relement)
await browser__build()
await server__build({
	external:['/assets/*', 'relementjs'],
	plugins: [css__replace__plugin]
})
console.info(`cogov.me server started on port ${port}`)
