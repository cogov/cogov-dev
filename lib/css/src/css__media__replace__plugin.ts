import { type OnLoadArgs, type PluginBuild } from 'esbuild'
import { var__css__replace } from './var__css__replace.js'
export function css__replace__plugin_() {
	return {
		name: 'css__replace__plugin',
		setup(build:PluginBuild) {
			build.onLoad(
				{ filter: /\.css$/ },
				async ({ path }:OnLoadArgs)=>{
					const contents = await Bun.file(path).text()
						.then(css=>var__css__replace(css))
					return { contents, loader: 'css' }
				}
			)
			},
	}
}
