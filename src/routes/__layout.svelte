<script>
  import { page } from '$app/stores'
  $: path = $page.url.pathname

  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import '$lib/scss/global.scss'
  import '$lib/scss/normalize.css'
</script>

<main>
  <Header />

  {#if path !== '/'}
    <section class="slot-wrap">
      <slot />
    </section>

    <Footer />
  {/if}
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: grid;
    grid-template-columns: minmax(10px, 1fr) minmax(300px, 1200px) minmax(10px, 1fr);
    place-items: center;
  }

  .slot-wrap {
    grid-column: 2 / 3;
  }
</style>
