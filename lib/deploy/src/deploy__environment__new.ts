import { Ctx_wide_T } from 'ctx-core/be'
import { deploy__env } from './deploy__env.js'
import { NODE_ENV_ } from './stage.js'
export function deploy__environment__new(ctx:Ctx_wide_T<''>) {
	const NODE_ENV = NODE_ENV_(ctx)
	return {
		COGOVME_PORT: deploy__env.COGOVME_PORT,
		NODE_ENV,
	}
}
