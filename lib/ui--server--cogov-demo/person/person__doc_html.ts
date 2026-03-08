import { layout__doc_html_ } from '../layout/layout__doc_html.js'
export function person__doc_html_({ people, person }:{ people:any[], person?:any }) {
	return layout__doc_html_({ title: 'Sign In', person },
		`<div class="card">
<h2>Sign In</h2>
${people.length > 0
			? `<table>
<tr><th>Name</th><th></th></tr>
${people.map(p=>`<tr><td>${p.name}</td><td><a href="/person/sign-in/${p.id}" class="btn btn-secondary">Sign In</a></td></tr>`).join('\n')}
</table>`
			: '<p>No people registered yet.</p>'}
</div>
<div class="card">
<h2>Register</h2>
<form method="POST" action="/person/register">
<label>Name</label>
<input type="text" name="name" required placeholder="Your name"/>
<button type="submit">Register</button>
</form>
</div>`)
}
