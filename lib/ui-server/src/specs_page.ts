import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { main_ } from 'relementjs/html'
import { footer_c_ } from './footer_c_.js'
import './specs_page.css'
export function specs_page_<env_T extends relement_env_T>() {
	return (
		main_({ class: 'specs_page page' },
			header_(),
			content_(),
			footer_c_())
	) as Node_T<env_T, HTMLElementTagNameMap['main']>
	function header_() {
		// language=html
		return raw_(`
			<div class="specs_page__header">
				<p class="specs_page__header__title">Technical Specifications</p>
				<p class="specs_page__header__subtitle">
					CoGov is optimized for
					<a
					href="/holochain"
					class="removelink"
					style="text-decoration: underline"
				>Holochain</a>.
				</p>
			</div>
		`)
	}
	function content_() {
		// language=html
		return raw_(`
			<div class="specs_page__content">
				<p class="specs_page__content__title">Some Technical Details</p>
				<p class="specs_page__content__body">
					While Protocol.Love is technically distributed ledger agnostic, it is optimally designed for
					<a href="/holochain">Holochain</a>, which acts as an unenclosable carrier for entries made using
					<a href="/protocol.love">Protocol.Love</a>.
					<br/><br/>
					A short article:
					<a
					href="https://medium.com/@rayzer42/cogov-defining-what-actually-happens-when-people-do-stuff-together-56a0d07c8a32"
				>What Actually Happens When People “Do Stuff Together”</a>
					<br/><br/>
					One way to describe
					<a href="/holochain" class="addlink" target="blank">Holochain</a> is the “protocol for protocols”.
					It allows developers to define protocols for information sharing,
					and then provides an ecosystem within which other developers can interact and iterate those protocols
					and their definitions with relative ease.
					<a href="/protocol.love">Protocol.Love</a> is a Holochain protocol
					that can be used in any holochain application to share information about the operations of organizations.
					<br/><br/>
					With Holochain, every application is made up of one or more protocols.
					Each application runs its own holochain on its own terms.
					Each device that is running an application has a private source
					<a
					href="https://medium.com/@rayzer42/9039eba653a1"
					class="addlink"
					target="blank">chain</a> that holds the app's “DNA” —
					the code that runs the app and ensures the protocols are being adhered to.
					Each app stores its data using methods of
					<a
					href="https://en.wikipedia.org/wiki/BitTorrent"
					target="blank"
					class="addlink"
				>distributed storage standards</a> that have been in operation for decades.
					This creates redundancy and validation of application data across randomized nodes.
				</p>
				<img src="/assets/images/cogov__protocol--one.png" alt=""
					class="specs_page__content__image specs_page__content__image__one"/>
				<br/><br/>
				<p class="specs_page__content__body">
					Holochain “entries” can be thought of records in a database.
					For more on how Holochain stores entries, click here.
					The core component in the CoGov ontology is a “Collective”.
					A Collective represents any group of people coming together with a shared mission.
					A “Collective Base Entry” is therefore a type of entry that specifies the existence of a Collective,
					and then provides the base for other kinds of entries that share properties and operational data
					to be associated with that Collective.
					<br/><br/>
					The CoGov Collective Base Entries “hang off” the DNA entry of any holochain using
					<a
					href="https://developer.holochain.org/api/latest/hdk/api/fn.link_entries.html"
					class="addlink"
					target="blank">Holochain links</a>.
					Other CoGov entries then hang off of that Collective Base Entry, and each other.
					This visual shows a sample of various types of entries and how they “hang off” each other.
					It is by no means a complete diagram.
				</p>
				<img src="/assets/images/cogov__protocol--two.png" alt=""
					class="specs_page__content__image specs_page__content__image__two"/>
				<p class="specs_page__content__body">
					However, the above is not an illustration of how data is actually stored.
					For more information on that, see this article:
					<a href="https://medium.com/@rayzer42/9039eba653a1" class="addlink" target="blank"
				> Monotonic Hash Chains? Distributed Ledger Technology? Holochain!</a>
					<br/><br/>
					The CoGov Protocol defines several types of entries:
					<br/><br/>
					<strong>Entry Types:</strong>
					<br/>Account
					<br/>Action
					<br/>ActionGroup
					<br/>Collective
					<br/>Council
					<br/>Currency
					<br/>CurrencyTransfer
					<br/>ItemDetails
					<br/>Member
					<br/>PrivilegeGroup
					<br/>Proposal
					<br/><br/>
					One of the most common entry types is an action.
					Actions are kind of like the assembly operations of a collective of people.
					The whole goal of the CoGov Protocol is to define the basic operations of groups at their core
					— so that no matter what or how a group dances together,
					we can actually always break it down into one or more of these fundamental operations:
					<br/><br/>
					<strong>
						Actions:
						<a
						href="https://docs.google.com/spreadsheets/d/13gwZp_jv9m76Ga3-4j68P-evyVByZjawVAyH3TU4kyw/edit#gid=0"
						class="addlink" target="blank"
					>(details)</a>
					</strong>
					<br/>AddMember
					<br/>AddUserToPrivilegeGroup
					<br/>CreateAccount
					<br/>CreateCurrency
					<br/>CreateCouncil
					<br/>CreateProposal
					<br/>CreatePrivilegeGroup
					<br/>IterateProposal
					<br/>SetCollectiveDescription
					<br/>SetCollectiveDetails
					<br/>SetCollectiveName
					<br/>SetMinimumToCloseOfActionType
					<br/>SetMinimumToCloseOfAction
					<br/>SetPrivilege
					<br/>SetVetoThresholdOfActionType
					<br/>SetVetoThresholdOfAction
					<br/>SetYeaThresholdOfActionType
					<br/>SetYeaThresholdOfAction
					<br/>SubmitProposalForResolution
					<br/>TransferCurrency
					<br/><br/>
					<br/>A very early 2016 mock-up of what a CoGov Ledger Browser might look like can be found at
					<a href="http://demo.cogov.tech/" class="addlink" target="blank">http://demo.cogov.tech/</a>
					<br/><br/>
					<img src="/assets/images/cogov__protocol--three.png" alt=""
						class="specs_page__content__image specs_page__content__image__three"/>
				</p>
			</div>
		`)
	}
}
