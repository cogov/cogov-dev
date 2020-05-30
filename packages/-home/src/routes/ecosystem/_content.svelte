<div class="ecosystemContent">
	<!-- p class="ecosystemContent__title">A Protocol for a New Paradigm in Business and Government</p -->
	<p class="ecosystemContent__body">
		This is a living Google Doc: <a target="_blank"
																		href="https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc">https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc</a>
	</p>
	<br/>
	<iframe style="width:100%; height:800px;"
					src="https://docs.google.com/document/d/1i2tbebBkJIqMjEW5hLiGssevBs29JHLj8URQxu6x1hc"></iframe>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.ecosystemContent {
	background-color: white;
	padding: 4rem 17%;
	@include respond(tab-port) {
		padding: 4rem;
	}
	&__title {
		font-size: 3.3rem;
		color: $cogov-primary;
		font-weight: 600;
		margin-bottom: 1rem;
	}
	&__subtitle {
		font-size: 2.8rem;
		color: #333;
		font-weight: 600;
	}
	&__caption {
		font-size: 2.4rem;
		color: #555;
		font-weight: 500;
	}
	&__body {
		font-size: 1.7rem;
		color: #333;
		font-weight: 500;
		text-align: left;
	}
	&__image {
		margin: 1.5rem 0;
		&--one {
			width: 40%;
			@include respond(tab-port) {
				width: 60%;
			}
		}
		&--two {
			width: 60%;
			@include respond(tab-port) {
				width: 80%;
			}
		}
		&--three {
			width: 100%;
		}
	}
}
</style>
