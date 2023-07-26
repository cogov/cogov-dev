import { var__css__replace } from '@cogov/css'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, params__ctx__memo_ } from '@ctx-core/solid-js'
import { Style_ } from '@ctx-core/ui-solid'
import { Footer } from './Footer.jsx'
export function Page_connect($p:{ ctx?:Ctx }) {
	const ctx_ = params__ctx__memo_($p)
	return (
		<ctx__Context.Provider value={ctx_()}>
			<Style/>
			<main class="connect-page page">
				<Header/>
				<Footer/>
			</main>
		</ctx__Context.Provider>
	)
	function Header() {
		return [
			<HeaderStyle/>,
			<div class="connectHeader page-header">
				<h3 class="connectHeader__title">Let's do something special!</h3>
				<h2 class="connectHeader__subtitle">
					Hello and thanks for reaching out! Feel free to reach out to us directly through Messenger
					or by filling out this form below.
					We look forward to hearing from you!
				</h2>
				<a href="https://www.facebook.com/messages/t/cogov.tech" target="blank" class="removelink">
					<button class="connectHeader__button">MESSENGER</button>
				</a>
				<a href="https://chat.holochain.org/appsup/channels/dgsc" target="blank" class="removelink">
					<button class="connectHeader__button">MATTERMOST</button>
				</a>
				<a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink">
					<button class="connectHeader__button">FORM</button>
				</a>
			</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.connect-page {
		margin-top: 7rem;
		height: 100%;
		width: 100%;
		position: relative;
	}
`))
//language=CSS
const HeaderStyle = Style_(()=>var__css__replace(`
	.connectHeader {
		padding: 12%;
		height: 85vh;
		background-image: linear-gradient(to right, rgba(51, 51, 51, .5), rgba(34, 34, 34, .5)), url('/assets/images/cogov__mandala--three.png');
		background-position: center;
		background-size: cover;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.connectHeader {
			padding: 12% 4rem;
		}
	}
	@media (max-width: var(--phone--max-width)) {
		.connectHeader {
			background-image: linear-gradient(to right, rgba(51, 51, 51, .5), rgba(34, 34, 34, .5)), url('/assets/images/cogov__mandala--three--mobile.png');
		}
	}
	.connectHeader__title {
		font-size: 5rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	@media (max-width: var(--phone--max-width)) {
		.connectHeader__title {
			font-size: 3.4rem;
		}
	}
	.connectHeader__subtitle {
		font-size: 2rem;
		color: white;
		font-weight: 500;
	}
	.connectHeader__button {
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
	.connectHeader__subtitle:hover {
		transform: scale(1.05);
	}
`))
