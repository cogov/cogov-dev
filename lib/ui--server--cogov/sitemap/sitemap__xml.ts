import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import { loc_, url_, urlset_ } from '@rappstack/ui--server/sitemap'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
export function sitemap__xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const { host } = request_url_(ctx)
	const origin = 'https://' + host
	return doc__render(
		xml_doctype,
		urlset_([
			url_([
				loc_(origin)
			]),
			url_([
				loc_(url__join(origin, '/connect'))
			]),
			url_([
				loc_(url__join(origin, '/declaration'))
			]),
			url_([
				loc_(url__join(origin, '/ecosystem'))
			]),
			url_([
				loc_(url__join(origin, '/holochain'))
			]),
			url_([
				loc_(url__join(origin, '/protocol.love'))
			]),
			url_([
				loc_(url__join(origin, '/services'))
			]),
			url_([
				loc_(url__join(origin, '/site'))
			]),
			url_([
				loc_(url__join(origin, '/specs'))
			]),
			url_([
				loc_(url__join(origin, '/team/raymond-d-powell'))
			]),
			url_([
				loc_(url__join(origin, '/vision'))
			]),
		])
	)
}
