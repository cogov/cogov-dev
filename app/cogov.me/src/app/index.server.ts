import type { page_params_T } from '@cogov/ui--server'
import {
	connect_page_,
	declaration_page_,
	ecosystem_page_,
	holochain_page_,
	home_page_,
	protocollove_page_,
	raymond_d_powell_page_,
	services_page_,
	specs_page_,
	vision_page_
} from '@cogov/ui--server'
import { Elysia } from 'elysia'
import type { DecoratorBase } from 'elysia/types'
import type { server__Node_T } from 'relementjs/server'
import { elysia_context__set, type elysia_context_T, middleware_, route__ctx_ } from 'relysjs'
export default middleware_(middleware_ctx=>{
	return new Elysia<'', DecoratorBase&elysia_context_T>({
		name: 'root_routes'
	})
		.get('/', route_(home_page_))
		.get('/connect', route_(connect_page_))
		.get('/declaration', route_(declaration_page_))
		.get('/ecosystem', route_(ecosystem_page_))
		.get('/holochain', route_(holochain_page_))
		.get('/protocol.love', route_(protocollove_page_))
		.get('/services', route_(services_page_))
		.get('/specs', route_(specs_page_))
		.get('/team/raymond-d-powell', route_(raymond_d_powell_page_))
		.get('/vision', route_(vision_page_))
	function route_(page_:($p:page_params_T)=>server__Node_T) {
		return (context:elysia_context_T)=>{
			const ctx = route__ctx_(middleware_ctx)
			elysia_context__set(ctx, context)
			return new Response(
				new ReadableStream({
					start(controller) {
						controller.enqueue('' + page_({ ctx }))
						controller.close()
					}
				}),
				// '' + page_({ ctx }),
				{
					headers: {
						'Content-Type': 'text/html;charset=UTF-8',
					}
				}
			)
		}
	}
})
