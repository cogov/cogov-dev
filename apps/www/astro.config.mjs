import node from '@astrojs/node'
import solid from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'
import { builtinModules } from 'module'
// https://astro.build/config
export default defineConfig({
	integrations: [solid()],
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
	},
})
