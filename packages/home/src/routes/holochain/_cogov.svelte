<div class="holochainCoGov page-body">
	<div class="holochainCoGov__body">
		<div class="holochainCoGov__left">
				<div class="holochainCoGov__logo--container">   
					<img class="holochainCoGov__logo" src="/assets/images/holochain-logo.png"/>
					<p class="holochainCoGov__title">Holochain</p>                    
				</div>

				<p class="holochainCoGov__body">
					Holochain is an opensource distributed application development and execution environment. It is free to download, install, use, and distribute. There is not, and can never be, an inherent cost associated with building or running a Holochain application.                    
				</p>
		</div>
		<div class="holochainCoGov__right">
			<div class="holochainCoGov__logo--container">
				<img class="holochainCoGov__logo" src="/assets/images/holo-logo.png"/>
				<p class="holochainCoGov__title">
					Holo
				</p>                    
			</div>

			<p class="holochainCoGov__column--body">
				Holo is the new cloud. A cloud that is built and maintained by the crowd. Literally—the Holo cloud was actually crowdsourced into (pre-)existence. If a developer wants to share their app with the world, Holo delivers.                     
			</p>                
		</div>
	</div>

	<iframe class="holochainCoGov__video" src="https://www.youtube.com/embed/2FJL3ibnZlY" frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.holochainCoGov {
	padding: 4rem 12% 8rem 12%;;
	@include respond(tab-port) {
		padding: 4rem;
	}
	&__logo {
		height: 6rem;
		align-self: start;
		margin-right: 2rem;
		&--container {
			display: flex;
			align-items: center;
			// margin-bottom: 1rem;
		}
	}
	&__text {
		margin-bottom: 2rem;
	}
	&__title {
		text-align: center;
		color: $cogov-primary;
		font-size: 3.3rem;
		font-weight: 600;
		margin-bottom: 2rem;
		@include respond(phone) {
			font-size: $phone-font-size;
		}
	}
	&__body {
		text-align-last: left;
		font-size: 1.7rem;
		font-weight: 500;
		display: flex;
		@include respond(tab-port) {
			flex-direction: column;
		}
		@include respond(phone) {
			font-size: $phone-font-size;
		}
	}
	&__left {
		width: 50%;
		margin-right: 4rem;
		text-align: justify;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		@include respond(tab-port) {
			width: 100%;
			margin-right: 0;
		}
	}
	&__right {
		width: 50%;
		margin-left: 4rem;
		text-align: justify;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		@include respond(tab-port) {
			width: 100%;
			margin-left: 0;
		}
	}
	&__column {
		&--title {
			color: #333;
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: .5rem;
			@include respond(phone) {
				font-size: $phone-font-size;
			}
		}
		&--body {
			font-size: 1.7rem;
			color: #333;
			@include respond(phone) {
				font-size: $phone-font-size;
			}
		}
	}
	&__video {
		margin-top: 2rem;
		width: 100%;
		height: 36vw;
		@include respond(tab-port) {
			height: 50vw;
		}
	}
}
</style>
