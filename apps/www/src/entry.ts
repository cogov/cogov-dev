import fastifyMiddie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import Fastify from 'fastify'
const entry_path = './dist/server/entry.mjs'
const app = Fastify({ logger: true })
await app
	.register(fastifyStatic, {
		root: './dist/client',
	})
	.register(fastifyMiddie)
app.use(await import(entry_path))
app.listen({ port: 8080 })
