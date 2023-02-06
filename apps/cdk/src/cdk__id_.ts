export const www_cdk__id__prefix = 'CoGov'
export function www_cdk__id_(suffix:string) {
	return [www_cdk__id__prefix, ...(suffix ? [suffix] : [])].join('-')
}
