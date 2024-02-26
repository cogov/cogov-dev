import { cogov__var__css__replace } from '@cogov/css'
export default ()=>{
	// language=css
	return cogov__var__css__replace(`
.nav__open__body {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
}
.nav__open__body_item {
	margin-bottom: 1.6rem;
	color: #333 !important;
	font-size: 1.7rem;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	cursor: pointer;
	transition: all .2s;
}
.nav__open__body_item:hover {
	font-weight: 600;
}
.MenuHandle img {
	height: 2rem;
}
	`.trim())
}
