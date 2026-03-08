import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function collectives__doc_html_(
	{ collectives, members, person }:{ collectives:any[], members:any[], person?:any }
) {
	const member_collective_ids = new Set(members.map((m:any)=>m.collective_id))
	const my_collectives = collectives.filter(c=>member_collective_ids.has(c.id))
	const other_collectives = collectives.filter(c=>!member_collective_ids.has(c.id))
	return layout__doc_html_({ title: 'Collectives', person },
		`<div class="card">
<h2>My Collectives</h2>
${my_collectives.length > 0
			? `<table>
<tr><th>Name</th><th>Description</th><th></th></tr>
${my_collectives.map(c=>`<tr>
<td>${c.name ?? ''}</td>
<td>${c.description ?? ''}</td>
<td>
<a href="/council?collective_id=${c.id}" class="btn btn-secondary">Enter</a>
<a href="/members?collective_id=${c.id}" class="btn btn-secondary">Members</a>
</td>
</tr>`).join('\n')}
</table>`
			: '<p>You haven\'t joined any collectives yet.</p>'}
</div>
${other_collectives.length > 0
			? `<div class="card">
<h2>Other Collectives</h2>
<table>
<tr><th>Name</th><th>Description</th><th></th></tr>
${other_collectives.map(c=>`<tr>
<td>${c.name ?? ''}</td>
<td>${c.description ?? ''}</td>
<td>
<form method="POST" action="/collective/join" style="display:inline">
<input type="hidden" name="collective_id" value="${c.id}"/>
<button type="submit">Join</button>
</form>
</td>
</tr>`).join('\n')}
</table>
</div>`
			: ''}
<div class="card">
<h2>Create Collective</h2>
<form method="POST" action="/collective/create">
<label>Name</label>
<input type="text" name="name" required placeholder="Collective name"/>
<label>Description</label>
<input type="text" name="description" placeholder="Brief description"/>
<label>Details</label>
<textarea name="details" placeholder="Details..." rows="3"></textarea>
<button type="submit">Create</button>
</form>
</div>`)
}
