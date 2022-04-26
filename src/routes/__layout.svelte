<script>
  import { page } from '$app/stores'
  $: path = $page.url.pathname

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import '$lib/scss/normalize.css'
  import '$lib/scss/global.scss'

  const hideMe = ['/', '/contact']
</script>

{#if path !== '/'}
  <Header />
{/if}

<slot />

{#if path !== '/'}
  <Footer />
{/if}

<style lang="scss">
</style>
