import { cogov__var__css__replace } from '@cogov/css'
import cogov__stars__mobile_png from '../public/assets/images/cogov__stars--mobile.png'
import cogov__stars_png from '../public/assets/images/cogov__stars.png'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.vision_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__stars_png}');
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.vision_page__header {
		padding: 12% 4rem;
	}
}
@media (max-width: var(--phone--max-width)) {
	.vision_page__header {
		padding-left: 1rem;
		padding-right: 1rem;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__stars__mobile_png}');
	}
}
.vision_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.vision_page__header__title {
		font-size: 3.4rem;
	}
}
.vision_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
.vision_page__content {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.vision_page__content {
		padding: 4rem;
	}
}
.vision_page__content__text {
	text-align: center;
	margin-bottom: 2rem;
}
.vision_page__content__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 600;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.vision_page__content__title {
		font-size: var(--phone--font-size);
	}
}
.vision_page__content__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
}
@media (max-width: var(--phone--max-width)) {
	.vision_page__content__body {
		font-size: var(--phone--font-size);
	}
}
.vision_page__content__levels {
	margin-top: 4rem;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.vision_page__content__levels__title {
	font-size: 2.7rem;
	text-align: center;
	font-weight: 600;
	margin-bottom: 2rem;
}
@media (max-width: var(--phone--font-size)) {
	.vision_page__content__levels__title {
		font-size: var(--phone--font-size);
	}
}
.vision_page__content__levels__photo {
	width: 50%;
}
@media (max-width: var(--port--tab--max-width)) {
	.vision_page__content__levels__photo {
		width: 80%;
	}
}
	`.trim())
}
