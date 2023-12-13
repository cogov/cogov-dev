import { import_meta_env_ } from '@ctx-core/env'
import { dirname, join, resolve } from 'path'
import { app__start, app_ctx, cwd__set, port__set } from 'relysjs'
export default async function () {
	config__init()
  return app__start()
}
export function config__init() {
	const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
	port__set(app_ctx, port)
	cwd__set(app_ctx, resolve(join(dirname(new URL(import.meta.url).pathname), '../..')))
}
