import { import_meta_env_ } from '@ctx-core/env'
import { ext_R_mime } from '@ctx-core/http'
import { Glob } from 'bun'
import { Elysia } from 'elysia'
import { dirname, extname, join, resolve } from 'path'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import {
	app__start as _app__start,
	app_ctx,
	browser_path_,
	compression_middleware_,
	cwd__set,
	metafile__wait,
	port__set
} from 'relysjs'
export default async function app__start() {
	config__init()
	await metafile__wait()
	return _app__start(
		new Elysia()
			.use(await static_middleware_())
			.use(compression_middleware_())
	)
}
async function static_middleware_() {
	const app = new Elysia()
	const glob = new Glob('**')
	for await (const relative_path of glob.scan(browser_path_(app_ctx))) {
		const url_path = join('/', relative_path)
		const content_type = ext_R_mime[extname(relative_path)] ?? 'text/plain'
		const path = join(browser_path_(app_ctx), relative_path)
		app.get(url_path, ({ request })=>{
			return new Response(Bun.file(path).stream(), {
				headers: {
					'Content-Type': content_type
				}
			})
		})
	}
	return app
}
export function config__init() {
	const port = parseInt(import_meta_env_().COGOVME_PORT) || 4020
	port__set(app_ctx, port)
	cwd__set(app_ctx, resolve(join(dirname(new URL(import.meta.url).pathname), '../..')))
	relement__use(server__relement)
}
