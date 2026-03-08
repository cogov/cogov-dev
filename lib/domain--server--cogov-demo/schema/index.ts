import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const person_tbl = sqliteTable('person', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
})
export const collective_tbl = sqliteTable('collective', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name'),
	description: text('description'),
	details: text('details'),
})
export const council_tbl = sqliteTable('council', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	collective_id: integer('collective_id').references(()=>collective_tbl.id),
	collective_council: integer('collective_council').default(0),
	name: text('name'),
})
export const member_tbl = sqliteTable('member', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	collective_id: integer('collective_id').references(()=>collective_tbl.id),
	person_id: integer('person_id').references(()=>person_tbl.id),
})
export const privilege_set_tbl = sqliteTable('privilege_set', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	collective_id: integer('collective_id').references(()=>collective_tbl.id),
	name: text('name'),
})
export const privilege_tbl = sqliteTable('privilege', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	privilege_set_id: integer('privilege_set_id').references(()=>privilege_set_tbl.id),
	action_type: text('action_type'),
})
export const member_privilege_tbl = sqliteTable('member_privilege', {
	collective_id: integer('collective_id'),
	member_id: integer('member_id'),
	privilege_set_id: integer('privilege_set_id'),
})
export const council_privilege_tbl = sqliteTable('council_privilege', {
	collective_id: integer('collective_id'),
	council_id: integer('council_id'),
	privilege_set_id: integer('privilege_set_id'),
})
export const proposal_tbl = sqliteTable('proposal', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	collective_id: integer('collective_id'),
	council_id: integer('council_id'),
	name: text('name'),
	date: text('date'),
})
export const proposal_revision_tbl = sqliteTable('proposal_revision', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	proposal_id: integer('proposal_id').references(()=>proposal_tbl.id),
	name: text('name'),
	date: text('date'),
})
export const proposal_action_tbl = sqliteTable('proposal_action', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	revision_id: integer('revision_id').references(()=>proposal_revision_tbl.id),
	action_type: text('action_type'),
	params: text('params'),
})
