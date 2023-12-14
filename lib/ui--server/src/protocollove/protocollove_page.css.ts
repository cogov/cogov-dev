import { cogov__var__css__replace } from '@cogov/css'
import { asset_path_a_ } from 'relysjs'
const [
	cogov__heart_circuit_board_jpg,
] = await asset_path_a_(
	import('../public/assets/images/cogov__heart-circuit-board.jpg'),
)
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.protocol-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.protocollove_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__heart_circuit_board_jpg}');
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.protocollove_page__header {
		padding: 12% 4rem;
	}
}
.protocollove_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.protocollove_page__header__title {
		font-size: 3.4rem;
	}
}
.protocollove_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
.protocollove_page__content {
	background-color: white;
	padding: 4rem 17%;
}
@media (max-width: var(--port--tab--max-width)) {
	.protocollove_page__content {
		padding: 4rem;
	}
}
.protocollove_page__content__title {
	font-size: 3.3rem;
	color: var(--cogov--primary--color);
	font-weight: 600;
	margin-bottom: 1rem;
}
.protocollove_page__content__subtitle {
	font-size: 2.8rem;
	color: #333;
	font-weight: 600;
}
.protocollove_page__content__caption {
	font-size: 2.4rem;
	color: #555;
	font-weight: 500;
}
.protocollove_page__content__body {
	font-size: 1.7rem;
	color: #333;
	font-weight: 500;
	text-align: justify;
}
	`.trim())
}
