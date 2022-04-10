<script>
  import { page } from '$app/stores'

  $: path = $page.url.pathname
</script>

<!-- //test how does a screen reader read mainNav as camelCase? reason to use spinal?-->
<header class="wrap spacer">
  <nav class="mainNav">
    <a href="/projects" class:active={path === '/projects'}>Projects</a>
    <a href="/contact" class:active={path === '/contact'}>Contact</a>
    <a href="/about" class:active={path === '/about'}>About</a>
  </nav>

  <h1>{path.split('/')[1]}</h1>
</header>

<style lang="scss">
  h1 {
    margin-block: 2rem;
    text-align: right;
  }

  nav {
    // grid-column: 1 / -1;
    justify-self: end;
    grid-column: 2 / 3;
    max-width: max-content;
    margin-block-start: 0.75rem;
    display: grid;
    grid-auto-flow: column;
    gap: var(--gap-100);
    place-content: center;
    font-size: var(--fs-5);
  }

  a {
    text-transform: uppercase;
  }

  .active {
    text-decoration: underline solid var(--clr-highlight) 2px;
    text-underline-offset: 0.5rem;
  }
</style>
