<script>
  import { page } from '$app/stores'

  $: path = $page.url.pathname
</script>

<!-- //test how does a screen reader read mainNav as camelCase? reason to use spinal?-->
<header class="wrap">
  <nav class="mainNav">
    <a href="/projects" class:active={path === '/projects'}>Projects</a>
    <a href="/contact" class:active={path === '/contact'}>Contact</a>
    <a href="/about" class:active={path === '/about'}>About</a>
  </nav>
</header>

<style lang="scss">
  nav {
    // grid-column: 1 / -1;
    grid-column: 2 / 3;
    max-width: max-content;
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem;
    place-content: center;
  }

  a {
    color: var(--clr-secondary);
    // font-size: var(--fs-lrg);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 4px solid transparent;

    &:hover {
      color: var(--clr-white);
      // filter: invert(55%);
    }
  }

  .active {
    border-bottom: 4px solid var(--clr-white);
  }
</style>
