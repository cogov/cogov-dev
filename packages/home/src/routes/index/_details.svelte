<section class="homeDetails page-body">
	<h2 class="homeDetails__title">Let's Connect! What role are you playing in the transition?</h2>
	<p>&nbsp;</p>
	<div class="homeDetails__types">
		<div class="homeDetails__type">
			<div class="homeDetails__header homeDetails__header--developer">
				<p class="homeDetails__header--title">DEVELOPER</p>
				<a href="/connect" class="removelink"><button class="homeDetails__cta">Get Trained</button></a>

			</div>
		</div>

		<div class="homeDetails__type">
			<div class="homeDetails__header homeDetails__header--philosopher">
				<p class="homeDetails__header--title">PHILOSOPHER</p>
				<a href="/connect" class="removelink"><button class="homeDetails__cta">Collaborate</button></a>
			</div>
		</div>

		<div class="homeDetails__type">
			<div class="homeDetails__header homeDetails__header--creator">
				<p class="homeDetails__header--title">CREATOR</p>
				<a href="/connect" class="removelink"><button class="homeDetails__cta">Hire Us</button></a>
			</div>
		</div>
	</div>
</section>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.homeDetails {
	width: 100%;
	background-color: #fbfbfb;
	padding: 4rem 12%;
	@include respond(tab-port) {
		padding: 4rem;
	}
	&__title {
		font-size: 3.3rem;
		font-weight: 600;
		color: $cogov-grey;
		text-align: center;
		margin-bottom: 1rem;
		@include respond(phone) {
			font-size: 1.2rem;
		}
	}
	&__subtitle {
		padding: 0 15%;
		font-size: 2rem;
		font-weight: 500;
		text-align: center;
		margin-bottom: 4rem;
		@include respond(tab-port) {
			padding: 0;
		}
		@include respond(phone) {
			font-size: $phone-font-size
		}
	}
	&__types {
		display: flex;
		justify-content: space-between;
		@include respond(tab-port) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
	&__type {
		margin: 0 2rem;
		height: 27rem;
		width: 27rem;
		@include respond(tab-port) {
			margin: 0 0 2rem 0;
		}
	}
	&__header {
		position: relative;
		width: 100%;
		height: 100%;
		background-size: cover;
		&--developer {
			background-image: linear-gradient(to right, rgba(#222, .5), rgba(#222, .5)), url('/assets/images/cogov__developer.png');
		}
		&--philosopher {
			background-image: linear-gradient(to right, rgba(#222, .5), rgba(#222, .5)), url('/assets/images/cogov__philosopher.png');
		}
		&--creator {
			background-image: linear-gradient(to right, rgba(#222, .5), rgba(#222, .5)), url('/assets/images/cogov__creator.png');
		}
		&--title {
			color: white;
			font-size: 2rem;
			font-weight: 600;
			padding-top: 25%;
			text-align: center;
			@include respond(phone) {
				font-size: 1.2rem;
			}
		}
	}
	&__cta {
		padding: 1rem 2rem;
		font-size: $phone-font-size;
		font-weight: 600;
		margin-left: 50%;
		margin-top: 1.875rem;
		transform: translateX(-50%);
		background-color: transparent;
		border: 1.5px solid white;
		color: white;
		transition: all .2s;
		cursor: pointer;
		&:hover {
			border: 1.5px solid $cogov-primary;
			background-color: $cogov-primary;
			color: white;
		}
	}
}
</style>
