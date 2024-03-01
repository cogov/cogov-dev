import { cogov__var__css__replace } from '@cogov/css'
import cogov__protocol_webp from '../public/assets/images/cogov__protocol.webp'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.specs_page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.specs_page__header {
	padding: 12%;
	height: 85vh;
	background-image:
		linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)),
		url('${cogov__protocol_webp}');
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.specs_page__header {
		padding: 12% 4rem;
	}
}
.specs_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.specs_page__header__title {
		font-size: 3.4rem;
	}
}
.specs_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
.specs_page__content {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.specs_page__content {
		padding: 4rem;
	}
}
.specs_page__content__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 600;
	margin-bottom: 1rem;
}
.specs_page__content__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
	text-align: justify;
}
.specs_page__content__image {
	margin: 1.5rem 0;
}
.specs_page__content__image__one {
	width: 40%;
}
@media (max-width: var(--port--tab--max-width)) {
	.specs_page__content__image__one {
		width: 60%;
	}
}
.specs_page__content__image__two {
	width: 60%;
}
@media (max-width: var(--port--tab--max-width)) {
	.specs_page__content__image__two {
		width: 80%;
	}
}
.specs_page__content__image__three {
	width: 100%;
}
	`.trim())
}
