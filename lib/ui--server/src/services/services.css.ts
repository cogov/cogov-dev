import { cogov__var__css__replace } from '@cogov/css'
import cogov__services_png from '../public/assets/images/cogov__services.png'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.services-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.services_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__services_png}');
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.services_page__header {
		padding: 12% 4rem;
	}
}
.services_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.services_page__header__title {
		font-size: 3.4rem;
	}
}
.services_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
@media (max-width: var(--phone--max-width)) {
	.services_page__header__subtitle {
		font-size: 2rem;
	}
}
.services_page__services {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.services_page__services {
		padding: 4rem;
	}
}
.services_page__services__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 600;
	margin-bottom: 1rem;
}
.services_page__services__subtitle {
	font-size: 2.7rem;
	color: #333;
	font-weight: 600;
	margin-bottom: 1rem;
}
.services_page__services__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
	text-align: justify;
}
	`.trim())
}
