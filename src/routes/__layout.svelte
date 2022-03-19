<script>
  import { page } from '$app/stores'
  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import './global.scss'
</script>

<main>
  <Header />
  <slot />

  {#if !$page.url.pathname === '/'}
    <Footer />
  {/if}
</main>

<style lang="scss">
  main {
    min-height: 100%;
    display: grid;
    place-content: center;
  }
</style>
