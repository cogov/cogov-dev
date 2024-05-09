import './index.css'
import {
	connect__doc_html_,
	declaration__doc_html_,
	ecosystem__doc_html_,
	holochain__doc_html_,
	home__doc_html_,
	protocollove__doc_html_,
	raymond_d_powell__doc_html_,
	services__doc_html_,
	site__doc_html_,
	sitemap__xml_,
	specs__doc_html_,
	vision__doc_html_
} from '@cogov/ui--server--cogov'
import { redirect_response__new } from '@rappstack/domain--server/response'
import { Elysia } from 'elysia'
import type { request_ctx_T } from 'rebuildjs/server'
import { html_response__new, middleware_, type middleware_ctx_T } from 'relysjs/server'
import { site } from '../config.js'
import { request_ctx__ensure } from '../ctx/index.js'
const robots_txt = `
User-agent: *
Allow: /
Sitemap: https://cogov.me/sitemap.xml
`.trim()
export default middleware_(middleware_ctx=>{
	return new Elysia({
		name: 'root_routes'
	})
		.get('/', html_route_(middleware_ctx, home__doc_html_))
		.get('/connect', html_route_(middleware_ctx, connect__doc_html_))
		.get('/declaration', html_route_(middleware_ctx, declaration__doc_html_))
		.get('/ecosystem', html_route_(middleware_ctx, ecosystem__doc_html_))
		.get('/holochain', html_route_(middleware_ctx, holochain__doc_html_))
		.get('/protocol.love', html_route_(middleware_ctx, protocollove__doc_html_))
		.get('/services', html_route_(middleware_ctx, services__doc_html_))
		.get('/site', html_route_(middleware_ctx, site__doc_html_))
		.get('/specs', html_route_(middleware_ctx, specs__doc_html_))
		.get('/team', ()=>{
			return redirect_response__new(302, '/team/raymond-d-powell')
		})
		.get('/team/raymond-d-powell', html_route_(middleware_ctx, raymond_d_powell__doc_html_))
		.get('/vision', html_route_(middleware_ctx, vision__doc_html_))
		.get('/robots.txt', ()=>
			new Response(robots_txt, {
				headers: { 'Content-Type': 'text/plain' },
			}))
		.get('/sitemap.xml', context=>
			html_response__new(
				sitemap__xml_({
					ctx: request_ctx__ensure(middleware_ctx, context, { site })
				}), {
					headers: {
						'Content-Type': 'application/xml'
					}
				}))
})
function html_route_(
	middleware_ctx:middleware_ctx_T,
	page_:($p:{ ctx:request_ctx_T })=>(string|ReadableStream<string>),
	response_init?:ResponseInit
) {
	return (context:{
		request:Request
		store:{ [x:string]:unknown }
	})=>html_response__new(
		page_({
			ctx: request_ctx__ensure(middleware_ctx, context, { site })
		}),
		response_init)
}
