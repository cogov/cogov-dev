import { Elysia } from 'elysia'
import { app_ctx, compression_middleware_, is_prod_, static_middleware_ } from 'relysjs/server'
import { config__init } from '../config.js'
export default async function app__start() {
	config__init()
	return new Elysia()
		.use(await static_middleware_(
			is_prod_(app_ctx)
				? {
					headers_: ()=>({
						'Cache-Control': 'max-age=31536000, public'
					})
				}
				: {}
		))
		.use(compression_middleware_())
		.onError(({ code, error, set })=>{
			console.error(error)
		})
}
