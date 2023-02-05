// @refresh reload
import { var__css__replace } from '@cogov/css'
import { ctx__Context__use, Style_ } from '@ctx-core/ui-solid'
import { createEffect, Suspense } from 'solid-js'
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Link,
	Meta,
	Routes,
	Scripts,
	Title,
	useLocation,
} from 'solid-start'
import { isServer } from 'solid-js/web'
import './root.css'
import { Nav, url_, url__ } from '~/_ui'
export default function Root() {
	const ctx = ctx__Context__use()
	const location = useLocation()
	if (!isServer) {
		url__set()
	}
	createEffect(()=>{
		location
		url__set()
	})
	const title = 'CoGov: Collaborative Governance Technologies'
	const image = `https://${url_(ctx).hostname}/assets/images/cogov__logo--blue-large.png`
	const site_name = 'Collaborative Governance Technologies'
	const description = 'CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration of governance and social coordination systems that YOU design!'
	return (
		<Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Meta name="theme-color" content="#333333"/>
				<Meta property="og:title" content={title}/>
				<Meta property="og:type" content="website"/>
				<Meta property="og:url" content={url_(ctx).toString()}/>
				<Meta property="og:image" content={image}/>
				<Meta property="og:site_name" content={site_name}/>
				<Meta property="og:description" content={description}/>
        <Link rel="manifest" href="/manifest.json"/>
        <Link rel="icon" type="image/png" href="/assets/images/cogov__logo--blue.png"/>
        <Link rel="shortcut icon" type="image/png" href="/assets/images/cogov__logo--blue.png"/>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
						<Style/>
						<Nav/>
            <Routes>
              <FileRoutes/>
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts/>
      </Body>
    </Html>
	)
	function url__set() {
		url__(ctx).$ = new URL(window.location.href)
	}
}
//language=CSS
const Style = Style_(()=>var__css__replace(`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
	html {
		font-size: 62.5%;
	}
	@media (min-width: var(--big--desktop--min-width)) {
		html {
			font-size: 70%;
		}
	}
	@media (max-width: var(--land--tab--max-width)) {
		html {
			font-size: 56.25%;
		}
	}
	body {
		font-family: 'Raleway', sans-serif;
		box-sizing: border-box;
		font-weight: 400;
		line-height: 1.6;
		overflow-x: hidden;
		outline: none;
		letter-spacing: .5px;
	}
	body main {
		width: 100%;
		overflow-x: hidden;
		overflow-y: auto;
	}
	body main.page {
		margin-top: var(--nav--height);
	}
	@media (max-width: var(--phone--max-width)) {
		body main.page {
			margin-top: var(--mobile--nav--height);
		}
	}
	body main .page-header {
		margin-bottom: 6rem;
	}
	body main .page-body {
		padding: 0 17%;
	}
	@media (max-width: var(--phone--max-width)) {
		body main .page-body {
			padding: 0 4rem;
		}
	}
	.addlink {
		text-decoration: none;
		outline: none;
		border-bottom: 1px solid var(--cogov--primary--color);
		font-weight: 600;
		color: var(--cogov--primary--color);
	}
	.removelink {
		text-decoration: none;
		outline: none;
		color: inherit;
	}
	.underline {
		border-bottom: 2px solid white;
	}
`))
