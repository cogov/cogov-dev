import { css__replace__plugin_ } from '@cogov/css'
import { app_ctx, browser__build, port__set, server__build } from '@cogov/ui-server'
import { import_meta_env_ } from '@ctx-core/env'
const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
port__set(app_ctx, port)
const css__replace__plugin = css__replace__plugin_()
await browser__build()
await server__build({
	external:['/assets/*', 'relementjs'],
	plugins: [css__replace__plugin]
})
console.info(`cogov.me server started on port ${port}`)
