import { Elysia } from 'elysia'
import { DecoratorBase } from 'elysia/types'
import { elysia_context_T, middleware_ } from 'relysjs'
export default middleware_(middleware_ctx=>{
	return new Elysia<'', DecoratorBase&elysia_context_T>({
		name: 'root_routes'
	})
})
