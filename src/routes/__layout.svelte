<script>
  import { page } from '$app/stores'

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import '$lib/scss/normalize.css'
  import '$lib/scss/global.scss'

  const hidePaths = ['/', '/cv']
  const title = 'Portfolio Brent Morton'
  $: path = $page.url.pathname
  $: currentTitle =
    path === '/' ? title : $page.url.pathname.split('/')[1] + ` - ${title}`
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

<style lang="scss">
</style>
