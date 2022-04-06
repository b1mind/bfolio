<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'
</script>

<h1>Proof of Work</h1>

<nav class="subNav">
  {#each Object.entries($projectsStore) as [key, project]}
    <a href="/projects/{key}" class:active={$page.url.pathname === `/projects/${key}`}>
      {project.name}
    </a>
  {/each}
</nav>

<slot />

<style lang="scss">
  h1 {
    font-size: var(--fs-lrg);
    margin-block: var(--spacer-200);
  }

  nav {
    margin-bottom: var(--spacer-200);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--gap-100) var(--gap-200);
  }

  a {
    color: blueviolet;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
      filter: invert(55%);
    }
  }

  .active {
    border-bottom: 2px solid var(--clr-white);
  }
</style>
