<script>
  import { page } from '$app/stores'
  $: path = $page.url.pathname

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import '$lib/scss/normalize.css'
  import '$lib/scss/global.scss'
</script>

<Header />

{#if path !== '/'}
  <main class="spacer">
    <slot />
  </main>

  <Footer />
{/if}

<style lang="scss">
  main {
    place-items: center;
  }
</style>
