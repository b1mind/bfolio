<script>
  import { page } from '$app/stores'

  $: path = $page.url.pathname
</script>

<nav class="subMenu">
  <a href="#" alt="Item1">Item1</a>
</nav>
<slot />
