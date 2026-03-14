/**
 * Static site export for Cloudflare Pages deployment.
 * Expects the server to already be running.
 * Usage: bun build.ts && bun start.ts & sleep 3 && bun prerender.ts
 */
import { cloudflare_export_ } from 'relysjs/server/export/cloudflare'
const { exported, errors } = await cloudflare_export_({
	base_url: process.env.PRERENDER_BASE || 'http://localhost:4020',
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
