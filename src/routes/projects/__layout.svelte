<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'

  $: path = $page.url.pathname
</script>

<h1>Proof of Work</h1>
<nav class="subNav">
  {#each Object.entries($projectsStore) as [key, project]}
    <a href="/projects{project.path}" class:active={path === project.path}>
      {project.name}
    </a>
  {/each}
</nav>
<slot />

<style lang="scss">
  nav {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
  }
</style>
