import { cogov__var__css__replace } from '@cogov/css'
import cogov__declaration__mobile_png from '../public/assets/images/cogov__declaration--mobile.png'
import cogov__declaration_png from '../public/assets/images/cogov__declaration.png'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.declaration-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.declaration_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url(${cogov__declaration_png});
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.declaration_page__header {
		padding: 12% 4rem;
	}
}
@media (max-width: var(--phone--max-width)) {
	.declaration_page__header {
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url(${cogov__declaration__mobile_png});
	}
}
.declaration_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.declaration_page__header__title {
		font-size: 3.4rem;
	}
}
.declaration_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
@media (max-width: var(--phone--max-width)) {
	.declaration_page__header__subtitle {
		font-size: 2rem;
	}
}
.declaration_page__content {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.declaration_page__content {
		padding: 4rem;
	}
}
.declaration_page__content__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 1000;
	margin-bottom: 1rem;
	font-family: 'Parisienne', cursive;
}
.declaration_page__content__body {
	font-size: 2.4rem;
	color: #333;
	font-weight: 500;
	font-family: 'Parisienne', cursive;
	text-align: left;
}
.declaration_page__content__body li {
	margin-left: 8rem;
	margin-right: 6rem;
}
	`.trim())
}
