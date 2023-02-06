import { Page_declaration } from '@cogov/ui'
import { Head, Link } from 'solid-start'
export default function C_declaration() {
	return [
		<Head>
			<Link href="https://fonts.googleapis.com/css?family=Muli|Parisienne|Roboto&display=swap" rel="stylesheet"/>
		</Head>,
		<Page_declaration/>
	]
}
