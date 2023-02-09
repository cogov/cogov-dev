import { ext_r_mime } from '@ctx-core/http'
import type { APIGatewayProxyEvent, APIGatewayProxyEventV2, APIGatewayProxyResult } from 'aws-lambda'
import type { Stats } from 'fs'
import { readFile, stat } from 'fs/promises'
import { dirname, extname, join, resolve } from 'path'
import 'solid-start/node/globals.js'
// @ts-ignore
import { default as manifest } from '../../dist/client/route-manifest.json'
// @ts-ignore
import { default as _server } from './entry-server.js'
const isBase64Encoded__regex =
	/^(image\/[^(svg)]|audio\/|video\/|application\/(pdf|zip|vnd.|msword|x-shockwave-flash|java-archive))/
export async function handler(
	event:APIGatewayProxyEvent|APIGatewayProxyEventV2
):Promise<APIGatewayProxyResult> {
	const url = new URL(
		(event as APIGatewayProxyEvent).path
		|| (event as APIGatewayProxyEventV2).rawPath,
		`https://${event.requestContext.domainName}`)
	const client_path = resolve(join(dirname(new URL(import.meta.url).pathname), '..', 'client'))
	const pathname = url.pathname
	const fs_path = join(client_path, pathname)
	let stats:Stats|undefined = undefined
	try {
		stats = await stat(fs_path)
	} catch (err:any) {
		if (err.code !== 'ENOENT') {
			console.trace(err)
			throw err
		}
	}
	if (stats && stats.isFile()) {
		const ContentType = ext_r_mime[extname(pathname)]
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
		body: ''
	}
}
function isBase64Encoded_(event:APIGatewayProxyEvent|APIGatewayProxyEventV2, ContentType:string) {
	return !!(event.isBase64Encoded || ContentType.match(isBase64Encoded__regex))
}
