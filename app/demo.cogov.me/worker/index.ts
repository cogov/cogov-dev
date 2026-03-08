import { Hono } from 'hono'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import {
	collective_tbl,
	council_tbl,
	member_tbl,
	person_tbl,
	privilege_set_tbl,
	privilege_tbl,
	proposal_tbl,
	proposal_revision_tbl,
	proposal_action_tbl,
} from '@cogov/domain--server--cogov-demo/schema'
import {
	home__doc_html_,
	collectives__doc_html_,
	council__doc_html_,
	members__doc_html_,
	person__doc_html_,
	privilege_set__doc_html_,
	proposal__doc_html_,
} from '@cogov/ui--server--cogov-demo'
type Bindings = {
	DB:D1Database
	SITE_URL:string
}
const app = new Hono<{ Bindings:Bindings }>()
// Middleware: inject Drizzle DB into context
app.use('*', async (c, next)=>{
	const db = drizzle(c.env.DB)
	c.set('db' as never, db as never)
	// Session: read person_id from cookie
	const person_id = getCookie(c, 'person_id')
	if (person_id) {
		const person = await db.select().from(person_tbl).where(eq(person_tbl.id, parseInt(person_id))).get()
		c.set('person' as never, person as never)
	}
	await next()
})
// Routes
app.get('/', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never)
	return c.html(home__doc_html_({ person }))
})
app.get('/person', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const people = await db.select().from(person_tbl).all()
	const person = c.get('person' as never)
	return c.html(person__doc_html_({ people, person }))
})
app.post('/person/register', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const { name } = await c.req.parseBody()
	if (!name || typeof name !== 'string') return c.redirect('/person')
	const result = await db.insert(person_tbl).values({ name }).returning()
	const person = result[0]
	setCookie(c, 'person_id', String(person.id), { path: '/', httpOnly: true, sameSite: 'Lax' })
	return c.redirect('/collectives')
})
app.get('/person/sign-in/:id', async (c)=>{
	const id = parseInt(c.req.param('id'))
	setCookie(c, 'person_id', String(id), { path: '/', httpOnly: true, sameSite: 'Lax' })
	return c.redirect('/collectives')
})
app.get('/person/sign-out', (c)=>{
	deleteCookie(c, 'person_id', { path: '/' })
	return c.redirect('/')
})
app.get('/collectives', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never)
	const collectives = await db.select().from(collective_tbl).all()
	const members = person ? await db.select().from(member_tbl).where(eq(member_tbl.person_id, (person as any).id)).all() : []
	return c.html(collectives__doc_html_({ collectives, members, person }))
})
app.post('/collective/create', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never) as any
	if (!person) return c.redirect('/person')
	const { name, description, details } = await c.req.parseBody() as Record<string, string>
	const result = await db.insert(collective_tbl).values({ name, description, details }).returning()
	const collective = result[0]
	// Add creator as member
	await db.insert(member_tbl).values({ collective_id: collective.id, person_id: person.id })
	// Create collective council
	await db.insert(council_tbl).values({ collective_id: collective.id, collective_council: 1, name: `${name} Council` })
	return c.redirect('/collectives')
})
app.get('/council', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const collective_id = parseInt(c.req.query('collective_id') ?? '0')
	const councils = await db.select().from(council_tbl).where(eq(council_tbl.collective_id, collective_id)).all()
	const collective = await db.select().from(collective_tbl).where(eq(collective_tbl.id, collective_id)).get()
	const proposals = await db.select().from(proposal_tbl).where(eq(proposal_tbl.collective_id, collective_id)).all()
	return c.html(council__doc_html_({ councils, collective, proposals }))
})
app.get('/members', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const collective_id = parseInt(c.req.query('collective_id') ?? '0')
	const members = await db.select().from(member_tbl).where(eq(member_tbl.collective_id, collective_id)).all()
	const people = await db.select().from(person_tbl).all()
	const collective = await db.select().from(collective_tbl).where(eq(collective_tbl.id, collective_id)).get()
	return c.html(members__doc_html_({ members, people, collective }))
})
app.post('/collective/join', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never) as any
	if (!person) return c.redirect('/person')
	const { collective_id } = await c.req.parseBody() as Record<string, string>
	await db.insert(member_tbl).values({ collective_id: parseInt(collective_id), person_id: person.id })
	return c.redirect('/collectives')
})
app.get('/privilege-set', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never)
	const collective_id = parseInt(c.req.query('collective_id') ?? '0')
	const collective = await db.select().from(collective_tbl).where(eq(collective_tbl.id, collective_id)).get()
	const privilege_sets = await db.select().from(privilege_set_tbl).where(eq(privilege_set_tbl.collective_id, collective_id)).all()
	const privileges = await db.select().from(privilege_tbl).all()
	return c.html(privilege_set__doc_html_({ privilege_sets, privileges, collective, person }))
})
app.post('/privilege-set/create', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never) as any
	if (!person) return c.redirect('/person')
	const { collective_id, name } = await c.req.parseBody() as Record<string, string>
	await db.insert(privilege_set_tbl).values({ collective_id: parseInt(collective_id), name })
	return c.redirect(`/privilege-set?collective_id=${collective_id}`)
})
app.get('/proposal', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never)
	const proposal_id = c.req.query('proposal_id')
	const collective_id = c.req.query('collective_id')
	if (proposal_id) {
		const proposal = await db.select().from(proposal_tbl).where(eq(proposal_tbl.id, parseInt(proposal_id))).get()
		const revisions = proposal ? await db.select().from(proposal_revision_tbl).where(eq(proposal_revision_tbl.proposal_id, proposal.id)).all() : []
		const actions = await db.select().from(proposal_action_tbl).all()
		const collective = proposal ? await db.select().from(collective_tbl).where(eq(collective_tbl.id, proposal.collective_id!)).get() : undefined
		return c.html(proposal__doc_html_({ proposal, revisions, actions, collective, person }))
	}
	const collective = collective_id ? await db.select().from(collective_tbl).where(eq(collective_tbl.id, parseInt(collective_id))).get() : undefined
	return c.html(proposal__doc_html_({ revisions: [], actions: [], collective, person }))
})
app.post('/proposal/create', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never) as any
	if (!person) return c.redirect('/person')
	const { collective_id, council_id, name } = await c.req.parseBody() as Record<string, string>
	const result = await db.insert(proposal_tbl).values({
		collective_id: parseInt(collective_id),
		council_id: parseInt(council_id),
		name,
		date: new Date().toISOString().split('T')[0],
	}).returning()
	return c.redirect(`/proposal?proposal_id=${result[0].id}`)
})
app.post('/proposal/revision/create', async (c)=>{
	const db = c.get('db' as never) as ReturnType<typeof drizzle>
	const person = c.get('person' as never) as any
	if (!person) return c.redirect('/person')
	const { proposal_id, name } = await c.req.parseBody() as Record<string, string>
	await db.insert(proposal_revision_tbl).values({
		proposal_id: parseInt(proposal_id),
		name,
		date: new Date().toISOString().split('T')[0],
	})
	return c.redirect(`/proposal?proposal_id=${proposal_id}`)
})
export default app
