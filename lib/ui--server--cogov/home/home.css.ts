import { cogov__var__css__replace } from '@cogov/css'
import cogov__creator_png from '../public/assets/images/cogov__creator.png'
import cogov__developer_png from '../public/assets/images/cogov__developer.png'
import cogov__interoperability_png from '../public/assets/images/cogov__interoperability.png'
import cogov__iteration_png from '../public/assets/images/cogov__iteration.png'
import cogov__philosopher_png from '../public/assets/images/cogov__philosopher.png'
import cogov__scalability_png from '../public/assets/images/cogov__scalability.png'
import cogov__transparency_png from '../public/assets/images/cogov__transparency.png'
import cogov__unenclosability_png from '../public/assets/images/cogov__unenclosability.png'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.home-page {
	height: 100%;
	width: 100%;
	position: relative;
}
.home_page__header {
	position: relative;
	height: 98vh;
}
.home_page__header__backdrop {
	position: absolute;
	top: 0;
	left: 0;
	height: 98vh;
	width: 100%;
}
.home_page__header__backdrop__cover {
	position: absolute;
	top: 0;
	left: 0;
	height: 98vh;
	width: 100%;
	background-image: linear-gradient(to right, var(--cogov--primary--color), var(--cogov--grey--color));
	opacity: .9;
	z-index: 200;
}
.home_page__header__backdrop__video {
	background-color: grey;
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: 10;
}
.home_page__header__content {
	position: absolute;
	top: 18%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	z-index: 300;
	height: 50rem;
	width: 90%;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__header__content {
		top: 13%;
		padding: 0 4rem;
	}
}
@media (max-width: var(--phone--max-width)) {
	.home_page__header__content {
		padding: 0;
	}
}
.home_page__header__logo {
	height: 12rem;
	margin-bottom: 1rem;
	cursor: pointer;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__header__logo {
		height: 9rem;
	}
}
.home_page__header__title {
	color: white;
	font-size: 4.2rem;
	font-weight: 600;
	text-align: center;
	margin-bottom: 1rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__header__title {
		font-size: 3.6rem;
	}
}
.home_page__header__subtitle {
	color: white;
	font-size: 2rem;
	font-weight: 400;
	padding: 0 9%;
	margin-bottom: 4rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__header__subtitle {
		padding: 0;
	}
}
.home_page__header__description {
	color: white;
	font-size: 1.4rem;
	font-weight: 500;
}
.home_page__header__action {
	border: 3px solid white;
	border-radius: 100px;
	color: white;
	color: var(--cogov--primary--color);
	font-size: 17px;
	font-weight: 600;
	text-transform: uppercase;
	background-color: transparent;
	padding: 1.5rem 3rem;
	outline: none;
	cursor: pointer;
	transition: all .2s;
}
.home_page__header__action:hover {
	transform: scale(1.02);
}
@keyframes animateLogo {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}
.home_page__about {
	padding: 0 10%;
	overflow: hidden;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about {
		padding: 0 4rem;
	}
}
.home_page__about a {
	color: black;
	font-weight: normal;
	letter-spacing: normal;
}
.home_page__about__header {
	background-color: white;
	display: flex;
	flex-direction: column;
}
.home_page__about__title {
	font-size: 1.7rem;
	color: var(--cogov--grey--color);
}
.home_page__about__subtitle {
	font-size: 3rem;
	font-weight: 600;
	color: var(--cogov--primary--color);
}
.home_page__about__body {
	font-size: 2rem;
	font-weight: 400;
	color: var(--cogov--grey--color);
}
.home_page__about__items {
	display: flex;
	flex-direction: column;
}
.home_page__about__items__title {
	font-size: 3.6rem;
	font-weight: 600;
	color: #333;
	margin-bottom: 2rem;
}
.home_page__about__item {
	display: flex;
	margin-bottom: 8rem;
	border: none;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item {
		flex-direction: column;
		align-items: center;
		margin-bottom: 6rem;
	}
}
.home_page__about__item__swap {
	display: flex;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__swap {
		display: none;
	}
}
.home_page__about__item__mobile {
	display: none;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__mobile {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
.home_page__about__item__photo {
	background-position: center;
	background-size: cover;
	height: 20vw;
	width: 40vw;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__photo {
		height: 45vw;
		width: 90vw;
		margin-bottom: 1rem;
	}
}
.home_page__about__item__photo__one {
	background-image: url('${cogov__unenclosability_png}');
}
.home_page__about__item__photo__two {
	background-image: url('${cogov__scalability_png}');
}
.home_page__about__item__photo__three {
	background-image: url('${cogov__transparency_png}');
}
.home_page__about__item__photo__four {
	background-image: url('${cogov__iteration_png}');
}
.home_page__about__item__photo__five {
	background-image: url('${cogov__interoperability_png}');
}
.home_page__about__item__text {
	width: 40vw;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__text {
		width: 100%;
	}
}
.home_page__about__item__text__right {
	margin-left: 8rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__text__right {
		margin-left: 0;
	}
}
.home_page__about__item__text__left {
	margin-right: 8rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__text__left {
		margin-right: 0;
	}
}
.home_page__about__item__title {
	font-size: 2.4rem;
	font-weight: 600;
	color: var(--cogov--grey--color);
	text-transform: uppercase;
}
.home_page__about__item__body {
	font-size: 1.7rem;
	font-weight: 400;
}
.home_page__about__item__video {
	width: 40vw;
	height: 20vw;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__about__item__video {
		width: 90vw;
		height: 45vw;
		margin-bottom: 1rem;
	}
}
.home_page__details {
	background-color: #fbfbfb;
	padding: 4rem 12%;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__details {
		padding: 4rem;
	}
}
.home_page__details__title {
	font-size: 3.3rem;
	font-weight: 600;
	color: var(--cogov--grey--color);
	text-align: center;
	margin-bottom: 1rem;
}
.home_page__details__types {
	display: flex;
	justify-content: space-between;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__details__types {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
}
.home_page__details__type {
	margin: 0 2rem;
	height: 27rem;
	width: 27rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__details__type {
		margin: 0 0 2rem 0;
	}
}
.home_page__details__header {
	position: relative;
	width: 100%;
	height: 100%;
	background-size: cover;
}
.home_page__details__header__developer {
	background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('${cogov__developer_png}');
}
.home_page__details__header__philosopher {
	background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('${cogov__philosopher_png}');
}
.home_page__details__header__creator {
	background-image: linear-gradient(to right, rgba(34, 34, 34, .5), rgba(34, 34, 34, .5)), url('${cogov__creator_png}');
}
.home_page__details__header__title {
	color: white;
	font-size: 2rem;
	font-weight: 600;
	padding-top: 25%;
	text-align: center;
}
.home_page__details__cta {
	padding: 1rem 2rem;
	font-size: var(--phone--font-size);
	font-weight: 600;
	margin-left: 50%;
	margin-top: 1.875rem;
	transform: translateX(-50%);
	background-color: transparent;
	border: 1.5px solid white;
	color: white;
	transition: all .2s;
	cursor: pointer;
}
.home_page__details__cta__hover {
	border: 1.5px solid var(--cogov--primary--color);
	background-color: var(--cogov--primary--color);
	color: white;
}
.home_page__collaborators {
	padding: 4rem;
	background-color: #fbfbfb;
}
.home_page__collaborators__title {
	text-align: center;
	margin-bottom: 5rem;
	font-size: 2.7rem;
	font-weight: 600;
	color: var(--cogov--grey--color);
}
.home_page__collaborators__collaborators {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.home_page__collaborators__collaborator {
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	color: var(--cogov--grey--color);
	margin-left: 2rem;
	margin-right: 2rem;
	margin-bottom: 2rem;
}
@media (max-width: var(--port--tab--max-width)) {
	.home_page__collaborators__collaborator {
		margin-bottom: 2rem;
	}
}
.home_page__collaborators__collaborator__logo {
	height: 8rem;
	margin-bottom: 1.5rem;
}
.home_page__collaborators__collaborator__text {
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;
}
	`.trim())
}
