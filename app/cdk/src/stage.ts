import { be_ } from 'ctx-core/object'
export const stage_ = be_<
	stage_T
>(()=>
		'prod',
	{ id: 'stage_' })
const stage_r_NODE_ENV:Record<stage_T, string> = {
	prod: 'production',
}
export const NODE_ENV_ = be_<string>(ctx=>
		stage_r_NODE_ENV[stage_(ctx)],
	{ id: 'NODE_ENV_' })
export type stage_T = 'prod'
