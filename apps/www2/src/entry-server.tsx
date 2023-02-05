import { assign, ctx_ } from '@ctx-core/object'
import { ctx__Context, type FetchEvent_w_ctx_T } from '@ctx-core/ui-solid'
import { type JSX } from 'solid-js'
import { type FetchEvent, type PageEvent } from 'solid-start'
import { createHandler, renderAsync, StartServer, } from 'solid-start/entry-server'
import { url__ } from '~/_ui'
export default createHandler(()=>handleRequest)
async function handleRequest(_event:FetchEvent) {
	const event = _event as FetchEvent_w_ctx_T
	const url = event.request.url
	console.info(url)
	const ctx = ctx_()
	assign(event.locals, { ctx })
	url__(ctx).$ = new URL(url)
	return renderAsync(((event)=>
		<ctx__Context.Provider value={ctx}>
			<StartServer event={event}/>
		</ctx__Context.Provider>) as (context:PageEvent)=>JSX.Element
	)()(event)
}
