<script>
  import { page } from '$app/stores'

  $: path = $page.url.pathname
</script>

<!-- //test how does a screen reader read mainNav as camelCase? reason to use spinal?-->
<header class="wrap spacer" data-header={path.split('/')[1]}>
  <nav class="mainNav">
    <a href="/projects" class:active={path.includes('/projects')}>Projects</a>
    <a href="/contact" class:active={path.includes('/contact')}>Contact</a>
    <a href="/about" class:active={path.includes('/about')}>About</a>
  </nav>
  <h1>{path.split('/')[1]}</h1>
</header>

<style lang="scss">
  header {
    position: relative;
    overflow: hidden;

    &::after {
      content: attr(data-header) '';
      position: absolute;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      justify-self: center;
      align-self: center;
      color: var(--clr-secondary-bg);
      font-size: var(--fs-xl);
      font-weight: var(--fw-7);
      text-transform: uppercase;
      line-height: 1;
      z-index: -99;
    }
  }

  h1 {
    display: block;
    font-size: var(--fs-lrg);
    margin-block: 2rem;
    text-align: right;
  }

  nav {
    // grid-column: 1 / -1;
    justify-self: end;
    // grid-column: 2 / 3;
    max-width: max-content;
    margin-block-start: 0.75rem;
    display: grid;
    grid-auto-flow: column;
    gap: var(--gap-5);
    place-content: center;
    font-size: var(--fs-5);
  }

  a {
    text-transform: uppercase;
    font-weight: var(--fw-7);
  }

  //todo better way to do this
  .active {
    // display: none;
    color: var(--clr-secondary-bg);
    // background-color: var(--clr-secondary-bg);
    // text-decoration: line-through 0.5rem;
    // text-underline-offset: 0.5rem;
    z-index: -99;
  }
</style>
