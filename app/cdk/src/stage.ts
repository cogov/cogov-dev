import { be_ } from 'ctx-core/object'
export const stage_ = be_<
	stage_T
>('stage_', ()=>
	'prod')
const stage_r_NODE_ENV:Record<stage_T, string> = {
	prod: 'production',
}
export const NODE_ENV_ = be_<string>('NODE_ENV_', ctx=>
	stage_r_NODE_ENV[stage_(ctx)])
export type stage_T = 'prod'
