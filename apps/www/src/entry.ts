import fastifyMiddie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import Fastify from 'fastify'
import { fileURLToPath } from 'node:url'
const entry_path = './dist/server/entry.mjs'
const app = Fastify({ logger: true })
await app
	.register(fastifyStatic, {
		root: fileURLToPath(new URL('./dist/client', import.meta.url)),
	})
	.register(fastifyMiddie)
app.use(await import(entry_path))
app.listen({ port: 8080 })
