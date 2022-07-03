<script>
  import '$lib/scss/normalize.css'
  import '$lib/scss/global.scss'

  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'

  const hidePaths = ['/', '/cv', '/kirby']
  const title = 'Portfolio Brent Morton'

  let currentTitle = ''
  $: if ($page.url.pathname.split('/').length >= 3) {
    currentTitle =
      $projectsStore[$page.url.pathname.split('/')[2]].subTitle + ` - ${title}`
  } else {
    currentTitle =
      path === '/' ? title : $page.url.pathname.split('/')[1] + ` - ${title}`
  }
  $: path = $page.url.pathname
</script>

<svelte:head>
  <title>{currentTitle}</title>
</svelte:head>

{#if !hidePaths.includes(path)}
  <Header />

  <div class="overlay-bg">
    <slot />
  </div>

  <Footer />
{:else}
  <slot />
{/if}
