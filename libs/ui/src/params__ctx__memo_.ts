import { type Ctx, ctx_ } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/ui-solid'
import { createMemo } from 'solid-js'
export function params__ctx__memo_(params:{ctx?:Ctx}) {
  return createMemo(()=>params.ctx || ctx__Context__use() || ctx_())
}
