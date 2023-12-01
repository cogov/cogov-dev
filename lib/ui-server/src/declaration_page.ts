import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { main_ } from 'relementjs/html'
import './declaration_page.css'
import { footer_c_ } from './footer_c_.js'
export function declaration_page_<env_T extends relement_env_T>() {
	return (
		main_({ class: 'declaration-page page' },
			header_(),
			content_(),
			footer_c_())
	) as Node_T<env_T, HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="declaration_page__header page__header">
				<h2 class="declaration_page__header__title">The Declaration of Collaborative Governance</h2>
				<h3 class="declaration_page__header__subtitle">
					Written by <a href="/team/raymond-d-powell" class="removelink underline">Raymond D. Powell</a>
					- based on
					<a
						target="_blank"
						class="removelink underline"
						href="https://constitution.org/us_doi.htm"
					>The Declaration of Independence</a> by
					<a
						target="_blank"
						class="removelink underline"
						href="https://en.wikipedia.org/wiki/Thomas_Jefferson"
					>Thomas Jefferson</a>
				</h3>
			</div>
		`)
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="declaration_page__content page__content">
				<p class="declaration_page__content__title">The Declaration of Collaborative Governance</p>
				<div class="declaration_page__content__body">
					<p>
						When, in the course of human events, it becomes necessary for one people
						to dissolve the implied social contracts that have connected them with one another,
						and to assume among the powers of the Earth,
						the separate and equal station to which the laws of nature and the universe entitle them,
						a decent respect to the opinions of humanity requires that
						they should declare the causes which impel them to the separation.
						<br/><br/>
						We hold these truths to be self-evident, that all people are created equal, that they are endowed,
						merely by their existence, with certain unalienable rights,
						that among these are life, liberty and the pursuit of happiness.
						That to secure these rights, systems of governance and social coordination are instituted among people,
						deriving their just powers from the consent of those who initially create, endorse, and allow those systems,
						as well as from the passive consent of those coming later,
						who are more subject to the determinations of those who came before.
						That whenever these systems become destructive of their initial intended ends,
						it is the right of the people to alter or to abolish them, and to institute new systems,
						laying the foundations on such principles and organizing the powers in such form,
						as to them shall seem most likely to effect their safety and happiness.
						Prudence, indeed, will dictate that systems of governance and social coordination
						should not be changed on a large scale for light and transient causes.
						But since people are more disposed to suffer, while evils are sufferable,
						than to right themselves by abolishing the forms to which they are accustomed,
						regular changes in the forms of governance and social coordination are required
						to prevent a centralization of power, and the corruption that inevitably follows.
						And when a long train of abuses and usurpations,
						pursuing invariably the same object evinces a design to reduce the people of Earth under absolute despotism,
						it is their right, it is their duty, to throw off such systems,
						and to provide new guards for their future security.
						Such has been the patient sufferance of the people of Earth;
						and such is now the necessity which constrains them to alter their relationship with antiquated systems.
						Currently, power is centralized into corporate and government entities that
						are not effectively responding to the needs of vast numbers of people on the planet,
						and a preponderance of evidence reveals a tendency towards centralization of power,
						inevitably leading to corruption, with the end of the
						establishment of an absolute tyranny over all life on this planet.
						<br/><br/>
						Therefore, through the power present in me as a being
						who has gained the gift of life in this great universe, I solemnly declare the following:
					</p>
					<ul>
						<li>
							I pledge allegiance to the Earth, and all the life which it supports;
							One planet, in our care, irreplaceable, with sustenance and respect for all life.
						</li>
						<br/>
						<li>
							I declare my freedom of choice, to live as I see fit;
							To choose my own path and seek my own happiness,
							as long as I do not infringe on the ability of other life to do the same.
						</li>
						<br/>
						<li>
							I recognize that every action, and every choice I make has an effect on all other life on this planet.
							I understand that the ways I might be affecting other life might not be readily apparent to me,
							and I recognize that I have a responsibility to seek out information,
							and to become most aware of how my actions are having an effect.
						</li>
					</ul>
					<p>
						With all the energy present within me as a living being,
						and in full service and honor to the beauty of life and the wonder of the Universe,
						I pledge to heed this declaration in all that I do.
					</p>
				</div>
			</div>
		`)
	}
}
