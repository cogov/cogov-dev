import { ext_r_mime } from '@ctx-core/http'
import type { APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyResult } from 'aws-lambda'
import type { Stats } from 'fs'
import { readFile, stat } from 'fs/promises'
import { dirname, extname, join, resolve } from 'path'
const isBase64Encoded__regex =
	/^(image\/[^(svg)]|audio\/|video\/|application\/(pdf|zip|vnd.|msword|x-shockwave-flash|java-archive))/
export async function handler(
	event:APIGatewayProxyEvent|APIGatewayProxyEventV2
):Promise<APIGatewayProxyResult> {
	const url = new URL(
		(event as APIGatewayProxyEvent).path
		|| (event as APIGatewayProxyEventV2).rawPath,
		`https://${event.requestContext.domainName}`)
	const handler__path = dirname(new URL(import.meta.url).pathname)
	const public__path = resolve(join(handler__path, 'public'))
	const pathname = url.pathname
	const fs_path = await fs_path_(pathname)
	if (fs_path) {
		const ContentType = ext_r_mime[extname(fs_path)]
		const isBase64Encoded = isBase64Encoded_(event, ContentType)
		const body = await readFile(fs_path)
			.then($=>$.toString(isBase64Encoded ? 'base64' : undefined))
			.catch($=>{
				console.trace($)
				throw $
			})
		return {
			statusCode: 200,
			headers: { 'content-type': ContentType },
			body,
			isBase64Encoded,
		}
	}
	return {
		statusCode: 404,
		headers: { 'content-type': 'text/html' },
		body: await readFile(join(public__path, '404.html')).then($=>$.toString())
	}
	async function fs_path_(pathname:string):Promise<string|null> {
		let fs_path = join(
			public__path,
			extname(pathname) ? pathname : join(pathname, 'index.html'))
		let stats:Stats|undefined = undefined
		try {
			stats = await stat(fs_path)
		} catch (err:any) {
			if (err.code !== 'ENOENT') {
				console.trace(err)
				throw err
			}
			return null
		}
		return stats.isDirectory() ? fs_path_(join(pathname, 'index.html')) : fs_path
	}
}
function isBase64Encoded_(event:APIGatewayProxyEvent|APIGatewayProxyEventV2, ContentType:string) {
	return !!(event.isBase64Encoded || ContentType.match(isBase64Encoded__regex))
}
