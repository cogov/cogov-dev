import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function privilege_set__doc_html_(
	{ privilege_sets, privileges, collective, person }:{ privilege_sets:any[], privileges:any[], collective?:any, person?:any }
) {
	return layout__doc_html_({ title: collective?.name ? `${collective.name} — Privilege Sets` : 'Privilege Sets', person },
		`<div class="card">
<h2>${collective?.name ?? 'Collective'} — Privilege Sets</h2>
<p><a href="/collectives" class="btn btn-secondary">Back to Collectives</a></p>
${privilege_sets.length > 0
			? `<table>
<tr><th>Name</th><th>Privileges</th></tr>
${privilege_sets.map((ps:any)=>{
				const ps_privileges = privileges.filter((p:any)=>p.privilege_set_id === ps.id)
				return `<tr><td>${ps.name ?? ''}</td><td>${ps_privileges.map((p:any)=>p.action_type).join(', ') || 'none'}</td></tr>`
			}).join('\n')}
</table>`
			: '<p>No privilege sets defined.</p>'}
</div>
${person ? `<div class="card">
<h2>Create Privilege Set</h2>
<form method="POST" action="/privilege-set/create">
<input type="hidden" name="collective_id" value="${collective?.id ?? ''}"/>
<input type="text" name="name" placeholder="Privilege set name" required/>
<button type="submit">Create Privilege Set</button>
</form>
</div>` : ''}`)
}
