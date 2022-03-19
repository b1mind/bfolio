<script>
  import Footer from '$lib/component/Footer.svelte'
  import Header from '$lib/component/Header.svelte'
  import './global.scss'
</script>

<main>
  <Header />

  <section class="slot-wrap">
    <slot />
  </section>

  <Footer />
</main>

<style lang="scss">
  main {
    min-height: 100%;
    display: grid;
    grid-template-columns: minmax(10px, 1fr) minmax(300px, 1200px) minmax(10px, 1fr);
    place-items: center;
  }

  .slot-wrap {
    grid-column: 2 / 3;
  }
</style>
