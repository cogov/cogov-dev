import { ctx_, globalThis__prop__ensure } from 'ctx-core/object'
import { relement__use } from 'relementjs'
import { browser__relement } from 'relementjs/browser'
export const browser__ctx__ensure = globalThis__prop__ensure(
	'browser__ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser__ctx', ()=>{
			const ctx = ctx_()
			relement__use(browser__relement)
			return ctx
		}))
