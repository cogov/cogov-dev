export const www_cdk__id__prefix = 'ProtocolLoveLifeWeb'
export function www_cdk__id_(suffix:string) {
	return [www_cdk__id__prefix, ...(suffix ? [suffix] : [])].join('-')
}
