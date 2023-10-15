import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const [
	stage$_,
	stage_,
	stage__set,
] = be_atom_triple_(()=>
	atom_<stage_T>('prod'))
const stage_R_NODE_ENV:Record<stage_T, string> = {
	prod: 'production',
}
export const NODE_ENV_ = be_<
	string
>(ctx=>
	stage_R_NODE_ENV[stage_(ctx)])
export type stage_T = 'prod'
