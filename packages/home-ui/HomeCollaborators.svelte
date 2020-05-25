<div class="HomeCollaborators">
	<h2 class="HomeCollaborators__title">Collaboration is our jam! Here's who with:</h2>
	<div class="HomeCollaborators__collaborators">
		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://www.metacurrency.org" target="blank">
				<img src="/assets/images/cogov__metacurrency.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">MetaCurrency<br/>Project</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://www.onenation.party/1" target="blank">
				<img src="/assets/images/cogov__onenation.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">OneNation</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://lightleadership.com/" target="blank">
				<img src="/assets/images/cogov__lightleadership.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Light Leadership</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://superluminal.is/" target="blank">
				<img src="/assets/images/cogov__superluminal-systems.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Superluminal Systems</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://core.network/" target="blank">
				<img src="/assets/images/cogov__core-network.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Core.Network</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://www.unify.org/" target="blank">
				<img src="/assets/images/cogov__unify.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">UNIFY</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://social-evolution.com/" target="blank">
				<img src="/assets/images/cogov__socialevolution.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Social Evolution</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://freedomculture.org/" target="blank">
				<img src="/assets/images/cogov__freedomculture.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Freedom Culture</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="http://www.fwii.net/" target="blank">
				<img src="/assets/images/cogov__fourworlds.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Four Worlds <br>International Institute</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="http://www.iwg.life/s7foundation/" target="blank">
				<img src="/assets/images/cogov__s7.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">S7&nbsp;Foundation</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://junto.foundation/" target="blank">
				<img src="/assets/images/cogov__junto-logo.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Junto<br/>Foundation</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="https://www.futureproper.world/" target="blank">
				<img src="/assets/images/cogov__future-proper-logo.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Future Proper</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="http://earthwalkunited.org/" target="blank">
				<img src="/assets/images/cogov__earth-walk-logo.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Earth&nbsp;Walk</p>
			</a>
		</div>

		<div class="HomeCollaborators__collaborator">
			<a class="HomeCollaborators__collaborator" href="http://edenisrising.com/" target="blank">
				<img src="/assets/images/cogov__eden-is-rising-logo.png" alt="" class="HomeCollaborators__collaborator--logo">
				<p class="HomeCollaborators__collaborator--text">Eden</p>
			</a>
		</div>
	</div>
</div>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.HomeCollaborators {
	padding: 4rem;
	width: 100vw;
	background-color: #fbfbfb;
	&__title {
		text-align: center;
		margin-bottom: 5rem;
		font-size: 2.7rem;
		font-weight: 600;
		color: $cogov-grey;
	}
	&__collaborators {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	&__collaborator {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		color: $cogov-grey;
		margin-left: 2rem;
		margin-right: 2rem;
		margin-bottom: 2rem;
		@include respond(tab-port) {
			margin-bottom: 2rem;
		}
		&--logo {
			height: 8rem;
			margin-bottom: 1.5rem;
		}
		&--text {
			font-size: 1.4rem;
			font-weight: 500;
			text-align: center;
		}
	}
}
</style>
