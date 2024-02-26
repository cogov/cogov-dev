import { cogov__var__css__replace } from '@cogov/css'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
:root {
	--accent: 124, 58, 237;
	--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
	--color-primary: #195C89;
	--cogov--primary--color: #195C89;
	--cogov--primary-light--color: #195C89;
	--cogov--primary-dark--color: #683B7A;
	--cogov--secondary--color: #805691;
	--cogov--grey--color: #333;
	--phone--max-width: var(--phone--max-width);
	--port--tab--max-width: 900px;
	--pack--min-width: 901px;
	--pack--max-width: 960px;
	--land--tab--max-width: 1200px;
	--big--desktop--min-width: 1800px;
	--phone--font-size: 2rem;
	--nav--height: 108px;
	--mobile--nav--height: 72px;
}
* {
	box-sizing: border-box;
}
*, *::before, *::after {
	margin: 0;
	padding: 0;
}
html {
	font-size: 62.5%;
}
@media (min-width: var(--big--desktop--min-width)) {
	html {
		font-size: 70%;
	}
}
@media (max-width: var(--land--tab--max-width)) {
	html {
		font-size: 56.25%;
	}
}
body {
	font-family: 'Raleway', sans-serif;
	box-sizing: border-box;
	font-weight: 400;
	line-height: 1.6;
	overflow-x: hidden;
	outline: none;
	letter-spacing: .5px;
}
body main .page__content {
	padding: 0 17%;
}
@media (max-width: var(--phone--max-width)) {
	body main .page__content {
		padding: 0 4rem;
	}
}
.addlink {
	text-decoration: none;
	outline: none;
	border-bottom: 1px solid var(--cogov--primary--color);
	font-weight: 600;
	color: var(--cogov--primary--color);
}
.removelink {
	text-decoration: none;
	outline: none;
	color: inherit;
}
.underline {
	border-bottom: 2px solid white;
}
	`.trim())
}
