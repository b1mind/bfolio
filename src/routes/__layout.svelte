<script>
  import { page } from '$app/stores'
  $: path = $page.url.pathname

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import '$lib/scss/normalize.css'
  import '$lib/scss/global.scss'
</script>

{#if path !== '/'}
  <Header />
{/if}

<main class="spacer">
  <slot />
</main>

{#if path !== '/'}
  <Footer />
{/if}

<style lang="scss">
  main {
    --spacer: var(--spacer-6);
    // height: 100%;
    min-height: 100%;
  }
</style>
