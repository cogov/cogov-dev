import { var__css__replace } from './var__css__replace.js'
export function css__replace__plugin_() {
	return {
		name: 'css__replace__plugin',
		transform(src:string, id:string) {
			if (/\.css$/.test(id)) {
				return {
					code: var__css__replace(src),
					map: null,
				}
			}
		}
	}
}
