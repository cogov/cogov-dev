import { site_request_ctx__ensure, type site_request_ctx__ensure_config_T } from '@rappstack/domain--server/ctx'
import { marked__set } from '@rappstack/ui--any/md'
import { app_marked_ } from '@rappstack/ui--server/md'
import { type middleware_ctx_T } from 'relysjs/server'
export function request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	config:site_request_ctx__ensure_config_T
) {
	const request_ctx = site_request_ctx__ensure(middleware_ctx, context, config)
	marked__set(request_ctx, app_marked_(request_ctx))
	return request_ctx
}
