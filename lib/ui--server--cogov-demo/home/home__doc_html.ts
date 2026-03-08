import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function home__doc_html_({ person }:{ person?:any }) {
	return layout__doc_html_({ title: 'Home', person },
		`<div class="card">
<h1>CoGov Demo</h1>
<p>CoGov fosters the emergence of coherent collective intelligence
by enabling the rapid iteration of governance and social coordination systems.</p>
${person
			? `<p>Welcome, ${person.name}! <a href="/collectives" class="btn">View Collectives</a></p>`
			: `<p><a href="/person" class="btn">Sign In to Get Started</a></p>`}
</div>`)
}
