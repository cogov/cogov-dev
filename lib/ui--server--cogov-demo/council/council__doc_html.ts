import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function council__doc_html_(
	{ councils, collective, proposals }:{ councils:any[], collective?:any, proposals:any[] }
) {
	const collective_council = councils.find((c:any)=>c.collective_council)
	const other_councils = councils.filter((c:any)=>!c.collective_council)
	return layout__doc_html_({ title: collective?.name ? `${collective.name} — Councils` : 'Councils' },
		`<div class="card">
<h2>${collective?.name ?? 'Collective'} — Councils</h2>
<p><a href="/collectives" class="btn btn-secondary">Back to Collectives</a></p>
${collective_council ? `<p><strong>Collective Council:</strong> ${collective_council.name}</p>` : ''}
${other_councils.length > 0
			? `<h3>Councils</h3>
<table>
<tr><th>Name</th></tr>
${other_councils.map((c:any)=>`<tr><td>${c.name ?? ''}</td></tr>`).join('\n')}
</table>`
			: ''}
</div>
<div class="card">
<h2>Proposals</h2>
${proposals.length > 0
			? `<table>
<tr><th>Name</th><th>Date</th></tr>
${proposals.map((p:any)=>`<tr><td>${p.name ?? ''}</td><td>${p.date ?? ''}</td></tr>`).join('\n')}
</table>`
			: '<p>No proposals yet.</p>'}
</div>`)
}
