<script>
  import Bar from '$lib/component/Bar.svelte'
</script>

<Bar />
<main id="main-content" class="wrap spacer" tabindex="-1">
  <h1>Brent S. Morton</h1>
  <p>
    I enjoy creating dynamic interactive components and telling stories via websites,
    with a passion for making web graphics and animations.
  </p>
  <p>
    Currently looking for an opportunity to learn, grow, and use new innovative
    technologies while also creating fun, accessible, and rewarding user experiences.
  </p>
  <p>
    Want to work with me? <a href="/contact">Reach Out</a>.
  </p>
</main>

<style lang="scss">
  main {
    margin-block-start: var(--spacer-9);
    display: grid;
    z-index: 0;
  }

  h1 {
    font-size: var(--fs-lrg);
  }
</style>
