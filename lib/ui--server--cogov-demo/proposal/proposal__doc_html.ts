import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function proposal__doc_html_(
	{ proposal, revisions, actions, collective, person }:{ proposal?:any, revisions:any[], actions:any[], collective?:any, person?:any }
) {
	return layout__doc_html_({ title: proposal?.name ? `Proposal: ${proposal.name}` : 'Create Proposal', person },
		proposal
			? `<div class="card">
<h2>Proposal: ${proposal.name}</h2>
<p><a href="/council?collective_id=${proposal.collective_id}" class="btn btn-secondary">Back to Council</a></p>
<p><strong>Date:</strong> ${proposal.date ?? 'N/A'}</p>
</div>
${revisions.length > 0
				? revisions.map((rev:any)=>{
					const rev_actions = actions.filter((a:any)=>a.revision_id === rev.id)
					return `<div class="card">
<h3>Revision: ${rev.name ?? 'Unnamed'}</h3>
<p><strong>Date:</strong> ${rev.date ?? 'N/A'}</p>
${rev_actions.length > 0
						? `<table>
<tr><th>Action Type</th><th>Params</th></tr>
${rev_actions.map((a:any)=>`<tr><td>${a.action_type ?? ''}</td><td>${a.params ?? ''}</td></tr>`).join('\n')}
</table>`
						: '<p>No actions in this revision.</p>'}
</div>`
				}).join('\n')
				: '<div class="card"><p>No revisions yet.</p></div>'}
${person ? `<div class="card">
<h2>Add Revision</h2>
<form method="POST" action="/proposal/revision/create">
<input type="hidden" name="proposal_id" value="${proposal.id}"/>
<input type="text" name="name" placeholder="Revision name" required/>
<button type="submit">Add Revision</button>
</form>
</div>` : ''}`
			: `<div class="card">
<h2>Create Proposal</h2>
<form method="POST" action="/proposal/create">
<input type="hidden" name="collective_id" value="${collective?.id ?? ''}"/>
<input type="hidden" name="council_id" value="${collective?.id ?? ''}"/>
<input type="text" name="name" placeholder="Proposal name" required/>
<button type="submit">Create Proposal</button>
</form>
</div>`)
}
