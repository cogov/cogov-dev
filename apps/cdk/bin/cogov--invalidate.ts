#!/usr/bin/env tsx
import { CloudFrontClient, CreateInvalidationCommand, ListDistributionsCommand } from '@aws-sdk/client-cloudfront'
import { DistributionSummary } from '@aws-sdk/client-cloudfront'
const domain_name = 'cogov.me'
await main()
async function main() {
	const client = new CloudFrontClient({})
	const list_distributions_cmd = new ListDistributionsCommand({})
	const list_distributions_res = await client.send(list_distributions_cmd)
	const distribution_summary =
		list_distributions_res.DistributionList?.Items
		? list_distributions_res.DistributionList.Items.find(($:DistributionSummary)=>
			$?.Aliases?.Items ? !!~$.Aliases.Items.indexOf(domain_name) : false)
		: null
	if (!distribution_summary) {
		console.warn(`No Distribution for ${domain_name}`)
		process.exit(1)
	}
	const invalidation_cmd = new CreateInvalidationCommand({
		DistributionId: distribution_summary.Id,
		InvalidationBatch: {
			Paths: {
				Quantity: 1,
				Items: ['/*']
			},
			CallerReference: new Date().getTime().toString(),
		}
	})
	const invalidation_res = await client.send(invalidation_cmd)
	console.info(invalidation_res)
	process.exit(0)
}
