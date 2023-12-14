import { import_meta_env_ } from '@ctx-core/env'
import { Elysia } from 'elysia'
import { dirname, join, resolve } from 'path'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app__start as _app__start, app_ctx, compression_middleware_, cwd__set, port__set } from 'relysjs'
export default async function app__start() {
	config__init()
	return _app__start(
		new Elysia()
			.use(compression_middleware_()))
}
export function config__init() {
	const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
	port__set(app_ctx, port)
	cwd__set(app_ctx, resolve(join(dirname(new URL(import.meta.url).pathname), '../..')))
	relement__use(server__relement)
}
