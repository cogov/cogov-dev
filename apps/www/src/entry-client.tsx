import { ctx_ } from '@ctx-core/object'
import { ctx__Context } from '@ctx-core/ui-solid'
import { mount, StartClient } from 'solid-start/entry-client'
import { type JSX } from 'solid-js'
const ctx = ctx_()
mount(()=>(
	<ctx__Context.Provider value={ctx}>
		<StartClient/>
	</ctx__Context.Provider> as JSX.Element
), document)
