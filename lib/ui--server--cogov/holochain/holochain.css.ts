import { cogov__var__css__replace } from '@cogov/css'
import cogov__northerlights__mobile_webp from '../public/assets/images/cogov__northerlights--mobile.webp'
import cogov__northerlights_webp from '../public/assets/images/cogov__northerlights.webp'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.holochain-page {
	margin-top: 7rem;
	height: 100%;
	width: 100%;
	position: relative;
}
.holochain_page__header {
	padding: 12%;
	height: 85vh;
	background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url(${cogov__northerlights_webp});
	background-position: center;
	background-size: cover;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__header {
		padding: 12% 4rem;
	}
}
@media (max-width: var(--phone--max-width)) {
	.holochain_page__header {
		background-image: linear-gradient(to right, rgba(51, 51, 51, .4), rgba(34, 34, 34, .4)), url('${cogov__northerlights__mobile_webp}');
	}
}
.holochain_page__header__title {
	font-size: 5rem;
	font-weight: 600;
	color: white;
	margin-bottom: 1rem;
}
@media (max-width: var(--phone--max-width)) {
	.holochain_page__header__title {
		font-size: 3.4rem;
	}
}
.holochain_page__header__subtitle {
	font-size: 2rem;
	color: white;
	font-weight: 500;
}
@media (max-width: var(--phone--max-width)) {
	.holochain_page__header__subtitle {
		font-size: 2rem;
	}
}
.holochain_page__cogov {
	padding: 4rem 12% 8rem 12%;;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__cogov {
		padding: 4rem;
	}
}
.holochain_page__cogov__logo {
	height: 6rem;
	align-self: start;
	margin-right: 2rem;
}
.holochain_page__cogov__logo__container {
	display: flex;
	align-items: center;
}
.holochain_page__cogov__title {
	text-align: center;
	color: var(--cogov--primary--color);
	font-size: 3.3rem;
	font-weight: 600;
	margin-bottom: 2rem;
}
.holochain_page__cogov__body {
	text-align-last: left;
	font-size: 1.7rem;
	font-weight: 500;
	display: flex;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__cogov__body {
		flex-direction: column;
	}
}
.holochain_page__cogov__left {
	width: 50%;
	margin-right: 4rem;
	text-align: justify;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__cogov__left {
		width: 100%;
		margin-right: 0;
	}
}
.holochain_page__cogov__right {
	width: 50%;
	margin-left: 4rem;
	text-align: justify;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__cogov__right {
		width: 100%;
		margin-left: 0;
	}
}
.holochain_page__cogov__column__body {
	font-size: 1.7rem;
	color: #333;
}
.holochain_page__cogov__video {
	margin-top: 2rem;
	width: 100%;
	height: 36vw;
	border: none;
}
@media (max-width: var(--port--tab--max-width)) {
	.holochain_page__cogov__video {
		height: 50vw;
	}
}
	`.trim())
}
