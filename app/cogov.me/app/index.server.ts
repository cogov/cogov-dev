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
import { type elysia_context_T, html_route_, middleware_ } from 'relysjs/server'
export default middleware_(middleware_ctx=>{
	return new Elysia<'', DecoratorBase&elysia_context_T>({
		name: 'root_routes'
	})
		.get('/', html_route_(middleware_ctx, home_page_))
		.get('/connect', html_route_(middleware_ctx, connect_page_))
		.get('/declaration', html_route_(middleware_ctx, declaration_page_))
		.get('/ecosystem', html_route_(middleware_ctx, ecosystem_page_))
		.get('/holochain', html_route_(middleware_ctx, holochain_page_))
		.get('/protocol.love', html_route_(middleware_ctx, protocollove_page_))
		.get('/services', html_route_(middleware_ctx, services_page_))
		.get('/specs', html_route_(middleware_ctx, specs_page_))
		.get('/team/raymond-d-powell', html_route_(middleware_ctx, raymond_d_powell_page_))
		.get('/vision', html_route_(middleware_ctx, vision_page_))
})
