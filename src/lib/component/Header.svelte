<script>
  import { page } from '$app/stores'

  $: path = $page.url.pathname
</script>

<!-- //test how does a screen reader read mainNav as camelCase? reason to use spinal?-->
<nav class="mainNav">
  <a href="/projects" class:active={path === '/projects'}>Projects</a>
  <a href="/contact" class:active={path === '/contact'}>Contact</a>
  <a href="/about" class:active={path === '/about'}>About</a>
</nav>

<style lang="scss">
  nav {
    grid-column: 2 / 3;
    max-width: max-content;
    display: grid;
    gap: 0.5rem;
  }

  a {
    color: blueviolet;
    font-size: clamp(3rem, 15vw, 8rem);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 4px solid transparent;

    &:hover {
      filter: invert(55%);
    }
  }

  .active {
    border-bottom: 4px solid var(--clr-white);
  }
</style>
