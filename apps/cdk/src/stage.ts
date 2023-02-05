import { be_ } from '@ctx-core/object'
import { atom_, type WritableAtom_ } from '@ctx-core/nanostores'
export const stage__ = be_<
	WritableAtom_<stage_T>
>('stage__', ()=>
	atom_('prod'))
const stage_r_NODE_ENV:Record<stage_T, string> = {
	prod: 'production',
}
export const NODE_ENV_ = be_<string>('NODE_ENV_', ctx=>
	stage_r_NODE_ENV[stage__(ctx).$])
export type stage_T = 'prod'
