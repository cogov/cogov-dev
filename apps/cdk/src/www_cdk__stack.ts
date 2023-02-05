import { param_r_ } from '@ctx-core/cli-args'
import { be_, type Ctx } from '@ctx-core/object'
import { Stack } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { resolve } from 'import-meta-resolve'
import { join } from 'path'
import { cdk__app_ } from './cdk__app_.js'
import { cdk__env } from './cdk__env.js'
import { www_cdk__id_ } from './cdk__id_.js'
import { type stage_T } from './stage.js'
const args = process.argv.slice(2)
const { stage_a } = param_r_(
	args,
	{ stage_a: '-s, --stage', },
	{ stage_a: [''], })
const dir = new URL(await resolve('.', import.meta.url)).pathname
export async function www_cdk__stack__build(ctx:Ctx) {
	process.chdir(join(dir, '..'))
}
export const www_cdk__stack_ = be_<
	Stack
>('www_cdk__stack_', ctx=>{
	const stage = (stage_a[0] || 'prod') as stage_T
	return new Stack(cdk__app_(ctx), www_cdk__id_('Stack'), {
		env: {
			account: cdk__env.CDK_DEFAULT_ACCOUNT,
			region: cdk__env.CDK_DEFAULT_REGION || 'us-east-1',
		},
		tags: {
			stage: stage as stage_T,
		}
	})
})
export const www_cdk__construct_ = be_<
	Construct
>('www_cdk__construct_', ctx=>
	new Construct(www_cdk__stack_(ctx), www_cdk__id_('Construct')))
