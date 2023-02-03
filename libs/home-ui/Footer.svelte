<section class="footer">
	<div class="footer__socials">
		<a href="https://www.facebook.com/messages/t/cogov.tech" target="blank" class="removelink footer__social">
			<img class="footer__social--icon" src="/assets/images/cogov__messengericon.png" alt="">
			<p class="footer__social--text">Messenger</p>
		</a>       

		<a href="https://www.facebook.com/cogov.tech/" target="blank" class="removelink footer__social">
			<img class="footer__social--icon" src="/assets/images/cogov__facebook.png" alt="">
			<p class="footer__social--text">Facebook</p>
		</a>      

		<a href="https://twitter.com/rayzer42" target="blank" class="removelink footer__social">
			<img class="footer__social--icon" src="/assets/images/cogov__twitter.png" alt="">
			<p class="footer__social--text">Twitter</p>
		</a>      

		<a href="https://www.linkedin.com/in/rayzer42/" target="blank" class="removelink footer__social">
			<img class="footer__social--icon" src="/assets/images/cogov__linkedin.png" alt="">
			<p class="footer__social--text">Linkedin</p>
		</a>      

		<a href="https://github.com/cogov" target="blank" class="removelink footer__social">
			<img class="footer__social--icon" src="/assets/images/cogov__github.png" alt="">
			<p class="footer__social--text">Github</p>
		</a>                                                                                                                             
	</div>
	<p class="footer__copyright">Copyright &copy;2019 CoGov.Tech, All Rights Reserved.</p>
		
</section>

<style type="text/scss">
@import "~@cogov/home-scss/base";
.footer {
	width: 100%;
	background-color: white;
	padding: 3rem 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	&__copyright {
		font-size: 1.2rem;
		font-weight: 500;
		color: #333;
	}
	&__socials {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 2rem;
	}
	&__social {
		display: flex;
		margin-bottom: 1.5rem;
		margin-right: 20px;
		cursor: pointer;
		&:hover > &--text {
			text-decoration: underline;
		}
		&--icon {
			height: 2rem;
			margin-right: 0.35rem;
		}
		&--text {
			font-size: 1.4rem;
			color: #333;
			font-weight: 500;
			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
