export function layout__doc_html_(
	{ title, person }:{ title:string, person?:any },
	...children:string[]
) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${title} — CoGov Demo</title>
<style>
body { font-family: system-ui, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
nav { background: #2c3e50; color: white; padding: 0.75rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
nav a { color: #ecf0f1; text-decoration: none; margin: 0 0.5rem; }
nav a:hover { text-decoration: underline; }
main { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
.card { background: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.5rem; text-align: left; border-bottom: 1px solid #eee; }
input, textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 100%; box-sizing: border-box; margin-bottom: 0.5rem; }
button, .btn { background: #3498db; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-block; }
button:hover, .btn:hover { background: #2980b9; }
.btn-secondary { background: #95a5a6; }
.btn-secondary:hover { background: #7f8c8d; }
</style>
</head>
<body>
<nav>
<div><a href="/"><strong>CoGov Demo</strong></a></div>
<div>
<a href="/collectives">Collectives</a>
${person
		? `<span>Signed in as ${person.name}</span> <a href="/person/sign-out">Sign Out</a>`
		: `<a href="/person">Sign In</a>`}
</div>
</nav>
<main>
${children.join('\n')}
</main>
</body>
</html>`
}
