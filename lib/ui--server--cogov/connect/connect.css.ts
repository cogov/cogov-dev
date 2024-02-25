import { cogov__var__css__replace } from '@cogov/css'
import cogov__mandala__three_png from '../public/assets/images/cogov__mandala--three.png'
import cogov__mandala__three__mobile_png from '../public/assets/images/cogov__mandala--three--mobile.png'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.connect_page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.connect_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .5), rgba(34, 34, 34, .5)), url(${cogov__mandala__three_png});
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.connect_page__header {
		padding: 12% 4rem;
	}
}
@media (max-width: var(--phone--max-width)) {
	.connect_page__header {
		background-image: linear-gradient(to right, rgba(51, 51, 51, .5), rgba(34, 34, 34, .5)), url(${cogov__mandala__three_png});
	}
}
.connect_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.connect_page__header__title {
		font-size: 3.4rem;
	}
}
.connect_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
.connect_page__header__button {
	background-color: transparent;
	color: white;
	margin-top: 2rem;
	padding: 1.5rem 3rem;
	font-size: 1.4rem;
	font-weight: 600;
	border: 3px solid white;
	border-radius: 25px;
	margin-right: 1rem;
	outline: none;
	cursor: pointer;
	transition: all .2s;
}
.connect_page__header__subtitle:hover {
	transform: scale(1.05);
}
	`.trim())
}
