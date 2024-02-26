import './site.css.js'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { md__raw_ } from '@rappstack/ui--any/md'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { div_, main_ } from 'relementjs/html'
import type { page_params_T } from '../_types.js'
import { main_class } from '../css/index.js'
import { site__footer_ } from '../footer/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function site__doc_html_($p:page_params_T) {
	return (
		layout__doc_html_($p,
			main_({
				class: class_(
					'site_page',
					'page',
					main_class)
			}, [
				header_(),
				content_(),
				site__footer_()
			]))
	)
	function header_() {
		// language=html
		return raw_(`
			<div class="site_page__header page__header mb-24">
				<p class="site_page__header__title">About this Site</p>
			</div>
		`)
	}
	function content_() {
		return div_({
			class: 'site_page__content page__content'
		}, [
			div_({
				class: class_('site_page__content__body')
			}, [
				// @formatter:off
				// language=md
				md__raw_(`
The contents of this site is written by Raymond Powell. This site is developed by ${tb_a_({ href: 'https://briantakita.me' }, 'Brian Takita')} in loving memory of Raymond Powell & the people who he has impacted in his life. The ${tb_a_({ href: 'https://github.com/cogov/cogov-dev' }, 'source code')} for this site is licensed under the Apache 2 license.

## Technology Stack

${tb_a_({ href: 'https://github.com/rappstack' }, 'rappstack')} ${tb_a_({ href: 'https://github.com/ctx-core/rmemo' }, 'rmemo')} ${tb_a_({ href: 'https://github.com/relysjs/relysjs' }, 'relysjs')} ${tb_a_({ href: 'https://github.com/relementjs/relementjs' }, 'relysjs')} ${tb_a_({ href: 'https://github.com/ctx-core/ctx-core' }, 'ctx-core')} ${tb_a_({ href: 'https://tailwindcss.com/' }, 'TailwindCSS')} ${tb_a_({ href: 'https://github.com/elysiajs/elysia' }, 'elysiajs')} ${tb_a_({ href: 'https://orm.drizzle.team/' }, 'Drizzle ORM')} ${tb_a_({ href: 'https://www.sqlite.org/index.html' }, 'SQLite')} ${tb_a_({ href: 'https://bun.sh/' }, 'bunjs')}
				`)
				// @formatter:on
			])
		])
	}
}
