<script context="module">
export async function preload({ path }) {
  return {
  	path,
	}
}
</script>

<script>
export let path
export let title = 'CoGov.Tech: Collaborative Governance Technologies'
export let url = `http://cogov.tech${path}`
export let image = 'http://cogov.tech/assets/images/cogov__logo--blue-large.png'
export let site_name = 'Collaborative Governance Technologies'
export let description = 'CoGov fosters the emergence of coherent collective intelligence by enabling the rapid iteration of governance and social coordination systems that YOU design!'
</script>

<title>{title}</title>
<meta property="og:title" content={title}/>
<meta property="og:type" content="website"/>
<meta property="og:url" content={url}/>
<meta property="og:image" content={image}/>
<meta property="og:site_name" content={site_name}/>
<meta property="og:description"
			content={description}/>
