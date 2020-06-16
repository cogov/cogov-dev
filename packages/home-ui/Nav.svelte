<script>
import NavOpen from './NavOpen.svelte'
import MenuHandle from './MenuHandle.svelte'
export let segment
export let navOpen = false
$: segment, navOpen = false
function set__navOpen__false() {
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
		{#each [
			['/protocol.love', 'protocol-love', 'Protocol.Love'],
			['/specs', 'specs', 'Tech Specs'],
			['/ecosystem', 'ecosystem', 'Ecosystem'],
			['/services', 'services', 'Services'],
			['/team/raymond-d-powell', 'team/raymond-d-powell', 'Founder'],
			['/declaration', 'declaration', 'Declaration'],
			['/connect', 'connect', 'Connect'],
		] as item}
			<div class="spacer"></div>
			<div class="nav-item">
				<a href={item[0]} class="removelink" on:click={set__navOpen__false}
					 aria-current={segment === item[1] ? 'page' : undefined}
				>{item[2]}</a>
			</div>
		{/each}
		<div class="spacer"></div>
		<a href="https://cogov.typeform.com/to/kMtTYt" target="blank" class="removelink whitepaper">
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
			<div class="nav-icon">
				<a href="." class="removelink" on:click|preventDefault={() => navOpen = !navOpen}>
					<MenuHandle class="nav-mobile"></MenuHandle>
				</a>
			</div>
		</slot>
	</div>

</div>

{#if navOpen}
	<NavOpen on:click={set__navOpen__false}></NavOpen>
{/if}

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
	padding: 0 2rem;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	overflow: hidden;
	@include respond(phone) {
		height: $nav-height--mobile;
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
		justify-content: flex-end;
		width: 100%;
		padding: 0 0 0 3rem;
		@media (max-width: $tab-port-max-width) {
			padding-left: 1rem;
			justify-content: flex-start;
		}
	}
	&-item {
		flex-grow: 0;
		font-size: 1.2rem;
		font-weight: bold;
		color: #555;
		cursor: pointer;
		transition: all .2s;
		&:hover {
			color: $cogov-primary;
		}
		@media (max-width: $tab-port-max-width) {
			display: none;
		}
	}
	.spacer {
		flex-grow: 1;
		max-width: 3rem;
		@media (max-width: $tab-port-max-width) {
			display: none;
		}
	}
	&-icon {
		position: absolute;
		top: 0;
		right: 1rem;
		z-index: 1;
		height: $nav-height;
		display: flex;
		align-items: center;
		justify-content: center;
		@include respond(phone) {
			height: $nav-height--mobile;
		}
	}
	&-button {
		padding: 1rem 2rem;
		color: #333;
		border-radius: 25px;
		border: 1.5px solid #333;
		font-size: 1.4rem;
		font-weight: 500;
		cursor: pointer;
		transition: all .2s;
		@media (max-width: $tab-port-max-width) {
			margin-left: 1rem;
		}
		&:hover {
			transform: scale(1.05);
		}
	}
	&-mobile {
		display: none;
		cursor: pointer;
		@media (max-width: $tab-port-max-width) {
			height: 2rem;
			margin-left: 2rem;
			display: block;
		}
	}
}
</style>
