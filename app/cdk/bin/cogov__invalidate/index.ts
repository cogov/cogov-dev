#!/usr/bin/env tsx
import {
	CloudFrontClient,
	CreateInvalidationCommand,
	DistributionSummary,
	ListDistributionsCommand
} from '@aws-sdk/client-cloudfront'
const DOMAIN = process.env.DOMAIN!
if (process.argv[1] === new URL(import.meta.url).pathname) {
	cogov__invalidate()
		.then(()=>{
			console.info('cogov__invalidate: SUCCESS!')
			process.exit(0)
		})
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
export async function cogov__invalidate() {
	const client =
		new CloudFrontClient({})
	const list_distributions_cmd =
		new ListDistributionsCommand({})
	const list_distributions_res =
		await client.send(list_distributions_cmd)
	const distribution_summary =
		list_distributions_res.DistributionList?.Items
		? list_distributions_res.DistributionList.Items
			.find((distribution_summary:DistributionSummary)=>
				distribution_summary?.Aliases?.Items
				? !!~distribution_summary.Aliases.Items.indexOf(DOMAIN)
				: false)
		: null
	if (!distribution_summary) {
		console.warn(`No Distribution for ${DOMAIN}`)
		process.exit(1)
	}
	const invalidation_cmd =
		new CreateInvalidationCommand({
			DistributionId: distribution_summary.Id,
			InvalidationBatch: {
				Paths: {
					Quantity: 1,
					Items: ['/*']
				},
				CallerReference: new Date().getTime().toString(),
			}
		})
	const invalidation_res =
		await client.send(invalidation_cmd)
	console.info(invalidation_res)
	process.exit(0)
}
