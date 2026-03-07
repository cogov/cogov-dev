/**
 * Static site export for Cloudflare Pages deployment.
 * Usage: bun build.ts && bun prerender.ts
 */
import { cloudflare_export_ } from 'relysjs/server/export/cloudflare'
import { resolve } from 'node:path'
const { exported, errors } = await cloudflare_export_({
	server_import: resolve('dist/server/index.js'),
	site_url: 'https://cogov.me',
	out_dir: 'dist/browser',
	sitemap: true,
	extra_routes: ['/robots.txt'],
	wrangler: { name: 'cogov-me' },
})
console.info(`Exported ${exported.length} files`)
if (errors.length > 0) {
	console.error(`${errors.length} errors:`, errors)
	process.exit(1)
}
