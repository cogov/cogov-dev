import { type Ctx, ctx_ } from '@ctx-core/object'
import { ctx__Context } from '@ctx-core/ui-solid'
import { createMemo, type ParentProps, Show } from 'solid-js'
export function WrapCtx($p:ParentProps<{ctx?:Ctx}>) {
	const _ctx_ = createMemo(()=>$p.ctx || ctx_())
  return (
		<Show<boolean> when={!!_ctx_()}>
			<ctx__Context.Provider value={_ctx_()}>
			</ctx__Context.Provider>
		</Show>
  )
}
