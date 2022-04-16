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
  header {
    //fix need mobile fix or % (@supports for dvt and new vp units?)
    min-height: 100vh;
  }

  nav {
    // grid-column: 1 / -1;
    grid-column: 2 / 3;
    display: grid;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    text-align: right;
  }

  a {
    font-size: var(--fs-lrg);
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
