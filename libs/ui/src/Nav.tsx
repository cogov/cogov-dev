import { var__css__replace } from '@cogov/css'
import { Style_ } from '@ctx-core/ui-solid'
import { createSignal, For, JSX, Show } from 'solid-js'
const nav__item_aa:nav__item_a_T[] = [
	['/protocol.love', 'protocol-love', 'Protocol.Love'],
	['/specs', 'specs', 'Tech Specs'],
	['/ecosystem', 'ecosystem', 'Ecosystem'],
	['/services', 'services', 'Services'],
	['/team/raymond-d-powell', 'team/raymond-d-powell', 'Founder'],
	['/declaration', 'declaration', 'Declaration'],
	// ['/vision', 'vision', 'Vision'],
	['/connect', 'connect', 'Connect'],
]
const NavOpen__item_aa:NavOpen__item_a_T[] = [
	['/', 'Home'],
	['/vision', 'Vision'],
	['/protocol.love', 'Protocol'],
	['/services', 'Services'],
	['/team/raymond-d-powell', 'Founder'],
	['/holochain', 'Holochain'],
	['/declaration', 'Declaration'],
	['/connect', 'Connect'],
]
export function Nav($p:{ segment?:string }) {
	const segment = $p.segment
	const [nav__open_, nav__open__set] = createSignal(false)
	return [
		<Style/>,
		<div class="nav">
			<a
				href="/"
				class="removelink"
				onclick={$=>{
					$.preventDefault()
					nav__open__set(false)
				}}
				aria-current={segment === undefined ? 'page' : undefined}
			>
				<div class="nav-logo-container">
					<img class="nav-logo-image" src="/assets/images/cogov__logo--blue.png" alt=""/>
					<p class="nav-logo-text">CoGov</p>
				</div>
			</a>
			<div class="nav-items">
				<For<nav__item_a_T[], JSX.Element> each={nav__item_aa}>{nav__item_a=>
					<>
						<div class="spacer"></div>
						<div class="nav-item">
							<a
								href={nav__item_a[0]}
								class="removelink"
								onclick={$=>{
									$.preventDefault()
									nav__open__set(false)
								}}
								aria-current={segment === nav__item_a[1] ? 'page' : undefined}
								innerText={nav__item_a[2]}/>
						</div>
					</>
				}</For>
				<div class="spacer"/>
				<a
					href="https://cogov.typeform.com/to/kMtTYt"
					target="blank"
					class="removelink whitepaper"
				>
					<div class="nav-button">Whitepaper</div>
				</a>
				<div class="nav-icon">
					<a
						href="."
						class="removelink"
						onclick={$=>{
							$.preventDefault()
							nav__open__set(!nav__open_())
						}}
					>
						<MenuHandle/>
					</a>
				</div>
			</div>
		</div>,
		<Show when={nav__open_()}>
			<NavOpen/>
		</Show>
	]
	function MenuHandle() {
		return [
			<MenuHandleStyle/>,
			<div class="MenuHandle">
				<img class="nav-mobile" src="assets/images/cogov__menu.png" alt=""/>
			</div>,
		]
	}
	function NavOpen() {
		return [
			<MenuHandleStyle/>,
			<div class="navOpen">
				<div class="navOpen-body">
					<For<NavOpen__item_a_T[], JSX.Element> each={NavOpen__item_aa}>{NavOpen__item_a=>
						<a
							href={NavOpen__item_a[0]}
							class="navOpen-body-item removelink"
							onclick={$=>{
								$.preventDefault()
								nav__open__set(false)
							}}
							innerText={NavOpen__item_a[1]}
						/>
					}</For>
				</div>
			</div>
		]
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: var(--nav--height);
		background-color: white;
		display: flex;
		padding: 0 2rem;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	@media (max-width: var(--phone--max-width)) {
		.nav {
			height: var(--mobile--nav--height);
		}
	}
	.nav-logo-container {
		height: 3rem;
		display: flex;
		align-items: center;
	}
	.nav-logo-image {
		height: 100%;
	}
	.nav-logo-text {
		font-size: 17px;
		font-weight: 500;
		margin-left: .75rem;
		color: var(--cogov--grey--color)
	}
	.nav-items {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		padding: 0 0 0 3rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.nav-items {
			padding-left: 1rem;
			justify-content: flex-start;
		}
	}
	.nav-item {
		flex-grow: 0;
		font-size: 1.2rem;
		font-weight: bold;
		color: #555;
		cursor: pointer;
		transition: all .2s;
	}
	.nav .nav-item:hover {
		color: var(--cogov--primary--color);
	}
	.nav .spacer {
		flex-grow: 1;
		max-width: 3rem;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.nav .spacer {
			display: none;
		}
	}
	.nav-icon {
		position: absolute;
		top: 0;
		right: 1rem;
		z-index: 1;
		height: var(--nav--height);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: var(--phone--max-width)) {
		.nav-icon {
			height: var(--mobile--nav--height);
		}
	}
	.nav-button {
		padding: 1rem 2rem;
		color: #333;
		border-radius: 25px;
		border: 1.5px solid #333;
		font-size: 1.4rem;
		font-weight: 500;
		cursor: pointer;
		transition: all .2s;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.nav-button {
			margin-left: 1rem;
		}
	}
	.nav-button:hover {
		transform: scale(1.05);
	}
	.nav-mobile {
		display: none;
		cursor: pointer;
	}
	@media (max-width: var(--port--tab--max-width)) {
		.nav-mobile {
			height: 2rem;
			margin-left: 2rem;
			display: block;
		}
	}
`))
//language=CSS
const MenuHandleStyle = Style_(()=>var__css__replace(`
	.MenuHandle img {
		height: 2rem;
	}
`))
//language=CSS
const NavOpenStyle = Style_(()=>var__css__replace(`
	.navOpen {
		background-color: white;
		height: calc(100vh - var(--nav--height));
		width: 100vw;
		z-index: 20000;
		position: fixed;
		top: var(--nav--height);
		left: 0;
	}
	@media (max-width: var(--phone--max-width)) {
		.navOpen {
			top: var(--mobile--nav--height);
			height: calc(100vh - var(--mobile--nav--height));
		}
	}
	.navOpen-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 0;
	}
	.navOpen-body-item {
		margin-bottom: 1.6rem;
		color: #333 !important;
		font-size: 1.7rem;
		font-weight: 500;
		text-transform: uppercase;
		text-align: center;
		cursor: pointer;
		transition: all .2s;
	}
	.navOpen-body-item:hover {
		font-weight: 600;
	}
`))
type nav__item_a_T = [string, string, string]
type NavOpen__item_a_T = [string, string]
