import node from '@astrojs/node'
import { css__replace__plugin_ } from '@cogov/css'
import { defineConfig } from 'astro/config'
import { builtinModules } from 'module'
// https://astro.build/config
export default defineConfig({
	integrations: [],
	adapter: node({ mode: 'standalone' }),
	output: 'server',
	server: {
		host: '0.0.0.0',
		port: 4020,
	},
	vite: {
		build: {
			rollupOptions: {
				external: builtinModules
			}
		},
		plugins: [css__replace__plugin_()]
	},
})
