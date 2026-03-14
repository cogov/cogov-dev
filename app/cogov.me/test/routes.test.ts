import { afterAll, beforeAll, describe, expect, test } from 'bun:test'
import type { Subprocess } from 'bun'

const PORT = 4321
const BASE = `http://localhost:${PORT}`

/**
 * Routes that return HTML pages.
 */
const html_routes = [
	'/',
	'/connect',
	'/declaration',
	'/ecosystem',
	'/holochain',
	'/protocol.love',
	'/services',
	'/site',
	'/specs',
	'/team/raymond-d-powell',
	'/vision',
]

let server_proc: Subprocess

beforeAll(async ()=>{
	server_proc = Bun.spawn(
		['bun', './start.ts'],
		{
			cwd: import.meta.dir + '/..',
			env: {
				...process.env,
				NODE_ENV: 'production',
				COGOVME_PORT: String(PORT),
			},
			stdout: 'pipe',
			stderr: 'pipe',
		}
	)
	// Wait for server to be ready (up to 30s)
	const deadline = Date.now() + 30_000
	while (Date.now() < deadline) {
		try {
			const res = await fetch(`${BASE}/robots.txt`)
			if (res.ok) return
		} catch {
			// not ready yet
		}
		await Bun.sleep(500)
	}
	throw new Error('Server failed to start within 30s')
})

afterAll(()=>{
	server_proc?.kill()
})

describe('HTML routes', ()=>{
	for (const route of html_routes) {
		test(`GET ${route} returns 200 with HTML content`, async ()=>{
			const res = await fetch(`${BASE}${route}`)
			expect(res.status).toBe(200)
			const html = await res.text()
			expect(html).toContain('<!DOCTYPE html>')
			expect(html).toContain('<html')
			expect(html).toContain('</html>')
			// Every page should have a <title>
			expect(html).toMatch(/<title>.*<\/title>/)
		})
	}
})

describe('/team redirect', ()=>{
	test('GET /team redirects to /team/raymond-d-powell', async ()=>{
		const res = await fetch(`${BASE}/team`, { redirect: 'manual' })
		expect(res.status).toBe(302)
		expect(res.headers.get('location')).toContain('/team/raymond-d-powell')
	})
})

describe('robots.txt', ()=>{
	test('GET /robots.txt returns 200 with correct content', async ()=>{
		const res = await fetch(`${BASE}/robots.txt`)
		expect(res.status).toBe(200)
		const text = await res.text()
		expect(res.headers.get('content-type')).toContain('text/plain')
		expect(text).toContain('User-agent: *')
		expect(text).toContain('Allow: /')
		expect(text).toContain('Sitemap: https://cogov.me/sitemap.xml')
	})
})

describe('sitemap.xml', ()=>{
	test('GET /sitemap.xml returns 200 with XML content', async ()=>{
		const res = await fetch(`${BASE}/sitemap.xml`)
		expect(res.status).toBe(200)
		const xml = await res.text()
		expect(res.headers.get('content-type')).toContain('application/xml')
		expect(xml).toContain('<urlset')
		expect(xml).toContain('https://cogov.me')
	})
})
