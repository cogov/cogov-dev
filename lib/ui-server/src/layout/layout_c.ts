/// <reference types="bun-types" />
import { type Ctx } from 'ctx-core/be'
import { fragment_, raw_, type tag__dom_T } from 'relementjs'
import { doc_html_ } from 'relementjs/server'
import { c_assets_, type c_assets_T } from '../c_assets.js'
import { browser__script_, request_, server__css_ } from '~/relysjs/index.js'
import { nav_c_ } from '../nav/index.js'
import './layout.css'
export function layout_c_({
	ctx,
	title,
	assets,
}:{
	ctx:Ctx
	title?:string,
	assets?:c_assets_T
}, ...children:tag__dom_T<'server'>) {
	const { url } = request_(ctx)
	const uri = new URL(url)
	title ||= 'CoGov: Collaborative Governance Technologies'
	const image = 'https://' + uri.hostname + '/assets/images/cogov__logo--blue-large.png'
	const site_name = 'Collaborative Governance Technologies'
	const description =
		'CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration ' +
		'of governance and social coordination systems that YOU design!'
	const css = server__css_(ctx)
	const script = browser__script_(ctx)
	assets = c_assets_({ css_a: css ? [css] : [], script_a: script ? [script] : [] }, assets)
	// language=html
	return doc_html_(raw_(`
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="theme-color" content="#333333"/>
	<meta property="og:title" content=${title}/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content=${url.toString()}/>
	<meta property="og:image" content=${image}/>
	<meta property="og:site_name" content=${site_name}/>
	<meta property="og:description" content=${description}/>
	<link rel="icon" type="image/png" href="/assets/images/cogov__logo--blue.png"/>
	<link rel="shortcut icon" type="image/png" href="/assets/images/cogov__logo--blue.png"/>
	<title>${title}</title>
	${assets.css_a.map(css=>
		`<link rel="stylesheet" type="text/css" href="${css}">`
	).join('\n')}
	${assets.script_a.map(script__output=>
		`<script type="module" src="${script__output}"></script>`
	).join('\n')}
</head>
<body>
	${nav_c_()}
	${fragment_(...children)}
</body>
	`.trim())) as tag__dom_T<'server'>
}
