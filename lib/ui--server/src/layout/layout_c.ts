import { fragment_, raw_, type tag__dom_T } from 'relementjs'
import { doc_html_ } from 'relementjs/server'
import { asset_path_a_, assets_, assets__new, type assets_T, request_, type route_ctx_T } from 'relysjs'
import { nav_c_ } from '../nav/index.js'
import './layout.css.js'
const [
	cogov__logo__blue_large_png,
	cogov__logo__blue_png,
] = await asset_path_a_(
	import('../public/assets/images/cogov__logo--blue-large.png'),
	import('../public/assets/images/cogov__logo--blue.png'),
)
export function layout_c_({
	ctx,
	title,
	assets,
}:{
	ctx:route_ctx_T
	title?:string,
	assets?:assets_T
}, ...children:tag__dom_T<'server'>) {
	const { url } = request_(ctx)
	const uri = new URL(url)
	title ||= 'CoGov: Collaborative Governance Technologies'
	const image = 'https://' + uri.hostname + cogov__logo__blue_large_png
	const site_name = 'Collaborative Governance Technologies'
	const description =
		'CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration ' +
		'of governance and social coordination systems that YOU design!'
	assets = assets__new(assets_(ctx), assets)
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
	<link rel="icon" type="image/png" href="${cogov__logo__blue_png}"/>
	<link rel="shortcut icon" type="image/png" href="${cogov__logo__blue_png}"/>
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
