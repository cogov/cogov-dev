import { cogov__var__css__replace } from '@cogov/css'
import { asset_path_a_ } from 'relysjs'
const [
	cogov__war_on_sense_making_jpeg,
] = await asset_path_a_(
	import('../public/assets/images/cogov__war-on-sense-making.jpeg'),
)
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.war-on-sense-making-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.war_on_sense_making_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__war_on_sense_making_jpeg}');
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.war_on_sense_making_page__header {
		padding: 12% 4rem;
	}
}
.war_on_sense_making_page__content {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.war_on_sense_making_page__content {
		padding: 4rem;
	}
}
.war_on_sense_making_page__content__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.war_on_sense_making_page__content__title {
		font-size: 4rem;
	}
}
.war_on_sense_making_page__content__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
.war_on_sense_making_page__content__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
	text-align: justify;
}
	`.trim())
}
