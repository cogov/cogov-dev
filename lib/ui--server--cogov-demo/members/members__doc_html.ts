import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function members__doc_html_(
	{ members, people, collective }:{ members:any[], people:any[], collective?:any }
) {
	const people_by_id = new Map(people.map(p=>[p.id, p]))
	return layout__doc_html_({ title: collective?.name ? `${collective.name} — Members` : 'Members' },
		`<div class="card">
<h2>${collective?.name ?? 'Collective'} — Members</h2>
<p><a href="/collectives" class="btn btn-secondary">Back to Collectives</a></p>
${members.length > 0
			? `<table>
<tr><th>Name</th></tr>
${members.map((m:any)=>{
				const person = people_by_id.get(m.person_id)
				return `<tr><td>${person?.name ?? 'Unknown'}</td></tr>`
			}).join('\n')}
</table>`
			: '<p>No members yet.</p>'}
</div>`)
}
