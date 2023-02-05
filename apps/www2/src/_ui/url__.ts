import { be_, type Ctx } from '@ctx-core/object'
import { atom_, type WritableAtom_ } from '@ctx-core/nanostores'
import { useMemo } from '@ctx-core/solid-nanostores'
export const url__ = be_<
	WritableAtom_<URL>
>('url__', ()=>atom_())
const url__memo_ = be_<
	()=>URL
>('url__memo_', ctx=>
	useMemo(url__(ctx)))
export function url_(ctx:Ctx) {
	return url__memo_(ctx)()
}
