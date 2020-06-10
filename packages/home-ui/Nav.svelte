<script>
import NavOpen from './NavOpen.svelte'
import MenuHandle from './MenuHandle.svelte'
export let segment
export let navOpen = false
$: segment, navOpen = false
function set__navOpen__false() {
	console.debug('set__navOpen__false|debug|1')
  navOpen = false
}
</script>

<div class="nav">
	<a href="/" class="removelink" on:click={set__navOpen__false}
		 aria-current={segment === undefined ? 'page' : undefined}
	>
		<div class="nav-logo-container">
			<img class="nav-logo-image" src="/assets/images/cogov__logo--blue.png" alt="">
			<p class="nav-logo-text">CoGov</p>
		</div>
	</a>
	<div class="nav-items">
		<div class="nav-item">
			<a href='/protocol.love' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'protocol-love' ? 'page' : undefined}
			>Protocol.Love</a>
		</div>
		<div class="nav-item">
			<a href='/specs' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'specs' ? 'page' : undefined}
			>Tech Specs</a>
		</div>
		<div class="nav-item">
			<a href='/ecosystem' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'ecosystem' ? 'page' : undefined}
			>Ecosystem</a>
		</div>
		<div class="nav-item">
			<a href='/services' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'services' ? 'page' : undefined}
			>Services</a>
		</div>
		<div class="nav-item">
			<a href='/team/raymond-d-powell' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'team/raymond-d-powell' ? 'page' : undefined}
			>Founder</a>
		</div>
		<div class="nav-item">
			<a href='/declaration' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'declaration' ? 'page' : undefined}
			>Declaration</a>
		</div>
		<div class="nav-item">
			<a href='/connect' class="removelink" on:click={set__navOpen__false}
				 aria-current={segment === 'connect' ? 'page' : undefined}
			>Connect</a>
		</div>
		<a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink">
			<div class="nav-button">
				Whitepaper
			</div>
		</a>

		<!--		<div class="nav-item">-->
		<!--			<a href='/vision' class="removelink"-->
		<!--				 aria-current={segment === 'vision' ? 'page' : undefined}-->
		<!--			>Vision</a>-->
		<!--		</div>-->
		<!--		<div class="nav-item">-->
		<!--			<a href='/holochain' class="removelink"-->
		<!--				 aria-current={segment === 'holochain' ? 'page' : undefined}-->
		<!--			>Holochain</a>-->
		<!--		</div>-->

		<slot name="navIcon">
			<div class="nav-icon" on:click={() => navOpen = !navOpen}>
				<a class="removelink">
					<MenuHandle class="nav-mobile"></MenuHandle>
				</a>
			</div>
		</slot>

		{#if navOpen}
			<NavOpen on:click={set__navOpen__false}></NavOpen>
		{/if}
</div>

</div>

<style type="text/scss" global>
@import "~@cogov/home-scss/base";
.nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: $nav-height;
	background-color: white;
	display: flex;
	padding: 0 4rem;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	overflow: hidden;
	@include respond(phone) {
		padding: 0 1rem;
	}
	&-logo {
		&-container {
			height: 3rem;
			display: flex;
			align-items: center;
		}
		&-image {
			height: 100%;
		}
		&-text {
			font-size: 17px;
			font-weight: 500;
			margin-left: .75rem;
			color: $cogov-grey;
		}
	}
	&-items {
		display: flex;
		align-items: center;
	}
	&-item {
		margin-left: 3rem;
		font-size: 1.4rem;
		font-weight: 500;
		color: #555;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			color: $cogov-primary;
		}
		@media (max-width: 1400px) {
			display: none;
		}
	}
	&-icon {
		position: absolute;
		right: 1rem;
		z-index: 1;
	}
	&-button {
		margin: 0 3rem;
		padding: 1rem 2rem;
		color: #333;
		border-radius: 25px;
		border: 1.5px solid #333;
		font-size: 1.4rem;
		font-weight: 500;
		cursor: pointer;
		transition: all .2s;
		@media (max-width: 1400px) {
			margin-left: 1rem;
		}
		@include respond(phone) {
			padding: 0.2rem 0.6rem;
			border: 0;
			font-size: $phone-font-size
		}
		&:hover {
			transform: scale(1.05);
		}
	}
	&-mobile {
		display: none;
		cursor: pointer;
		@media (max-width: 1400px) {
			height: 2rem;
			margin-left: 2rem;
			display: block;
		}
	}
}
</style>
