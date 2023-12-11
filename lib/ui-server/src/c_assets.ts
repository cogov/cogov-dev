export function c_assets_(...c_meta_a:(Partial<c_assets_T>|undefined)[]) {
	const c_assets = { css_a: [], script_a: [] } as c_assets_T
	for (const _c_meta of c_meta_a) {
		for (const css of _c_meta?.css_a || []) {
			if (!~c_assets.css_a.indexOf(css)) c_assets.css_a.push(css)
		}
		for (const script of _c_meta?.script_a || []) {
			if (!~c_assets.script_a.indexOf(script)) c_assets.script_a.push(script)
		}
	}
	return c_assets
}
export type c_assets_T = {
	css_a:(string|typeof import('*.css'))[]
	script_a:string[]
}
