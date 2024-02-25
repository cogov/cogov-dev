import { cogov__var__css__replace } from '@cogov/css'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
@tailwind base;
@tailwind components;
@tailwind utilities;
.site_page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.site_page__header {
	padding: 64px 12% 0;
}
@media (max-width: var(--port--tab--max-width)) {
	.site_page__header {
		padding: 12% 4rem;
	}
}
.site_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: #333;
}
@media (max-width: var(--phone--max-width)) {
	.site_page__header__title {
		font-size: 3.4rem;
	}
}
.site_page__header__subtitle {
	font-size: 2rem;
	color: #333;
	font-weight: 500;
}
@media (max-width: var(--phone--max-width)) {
	.site_page__header__subtitle {
		font-size: 2rem;
	}
}
.site_page__content {
	background-color: white;
	padding: 64px 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.site_page__content {
		padding: 4rem;
	}
}
.site_page__content__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 600;
	margin-bottom: 1rem;
}
.site_page__content__subtitle {
	font-size: 2.7rem;
	color: #333;
	font-weight: 600;
	margin-bottom: 1rem;
}
.site_page__content__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
	text-align: justify;
}
	`.trim())
}
