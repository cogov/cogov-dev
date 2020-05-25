<script>
import NavOpen from './NavOpen.svelte'
export let segment
export let navOpen = false
</script>

<div class="nav">
	<a href="/" class="removelink" aria-current={segment === undefined ? 'page' : undefined}>
		<div class="nav__logo--container">
			<img class="nav__logo--image" src="/assets/images/cogov__logo--blue.png" alt="">
			<p class="nav__logo--text">CoGov</p>
		</div>
	</a>
	<div class="nav__items">
		<div class="nav__item">
			<a href='/vision' class="removelink"
				 aria-current={segment === 'vision' ? 'page' : undefined}
			>Vision</a>
		</div>
		<div class="nav__item">
			<a href='/protocol' class="removelink"
				 aria-current={segment === 'protocol' ? 'page' : undefined}
			>Protocol</a>
		</div>
		<div class="nav__item">
			<a href='/services' class="removelink"
				 aria-current={segment === 'services' ? "page" : undefined}
			>Services</a>
		</div>
		<div class="nav__item">
			<a href='/team/raymond-d-powell' class="removelink"
				 aria-current={segment === 'team/raymond-d-powell' ? "page" : undefined}
			>Founder</a>
		</div>
		<div class="nav__item">
			<a href='/holochain' class="removelink"
				 aria-current={segment === 'holochain' ? "page" : undefined}
			>Holochain</a>
		</div>
		<div class="nav__item">
			<a href='/declaration' class="removelink"
				 aria-current={segment === 'declaration' ? "page" : undefined}
			>Declaration</a>
		</div>
		<div class="nav__item">
			<a href='/connect' class="removelink"
				 aria-current={segment === 'connect' ? "page" : undefined}
			>Connect</a>
		</div>


		<a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink">
			<div class="nav__button">
				Whitepaper
			</div>
		</a>

		<slot name="navIcon">
			<div class="nav__icon" on:click={navOpen = true}>
				<a class="removelink">
					<img src="/assets/images/cogov__menu.png" alt="" class="nav__mobile">
				</a>
			</div>
		</slot>

		{#if navOpen}
			<NavOpen>
				<img on:click={navOpen = false} slot="navClose" class="navOpen__nav--icon"
						 src="/assets/images/cogov__menu.png"
						 alt=""
				>
			</NavOpen>
		{/if}
</div>

</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 8rem;
	background-color: white;
	display: flex;
	padding: 0 4rem;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	&__logo {
		&--container {
			height: 3rem;
			display: flex;
			align-items: center;
		}
		&--image {
			height: 100%;
		}
		&--text {
			font-size: 17px;
			font-weight: 500;
			margin-left: .75rem;
			color: $cogov-grey;
		}
	}
	&__items {
		display: flex;
		align-items: center;
	}
	&__item {
		margin-left: 3rem;
		font-size: 1.4rem;
		font-weight: 500;
		color: #555;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			color: $cogov-primary;
		}
		@include respond(tab-port) {
			display: none;
		}
	}
	&__button {
		margin-left: 3rem;
		padding: 1rem 2rem;
		color: #333;
		border-radius: 25px;
		border: 1.5px solid #333;
		font-size: 1.4rem;
		font-weight: 500;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			transform: scale(1.05);
		}
	}
	&__mobile {
		display: none;
		cursor: pointer;
		@include respond(tab-port) {
			// background-color:   green;
			height: 2rem;
			margin-left: 2rem;
			display: block;
		}
	}
}
</style>
