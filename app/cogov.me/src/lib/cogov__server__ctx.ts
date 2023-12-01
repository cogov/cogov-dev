import { ctx_ } from 'ctx-core/all'
import { relement__use } from 'relementjs'
import { server__fragment__relement } from 'relementjs/server'
export function cogov__server__ctx_() {
  const ctx = ctx_()
	relement__use(server__fragment__relement)
	return ctx
}
