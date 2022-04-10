<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'

  //fixme needs to move to root layout
  //refactor and abstract to util later *debt
  let currentTitle = ''
  $: if ($page.url.pathname.split('/').length > 2) {
    currentTitle = $projectsStore[$page.url.pathname.split('/')[2]].subTitle
  } else {
    // currentTitle = $page.url.pathname.split('/')[1]
  }
</script>

<svelte:head>
  <title>{currentTitle}</title>
</svelte:head>

<header class="wrap">
  <nav class="subNav">
    {#each Object.entries($projectsStore) as [key, project]}
      <a href="/projects/{key}" class:active={$page.url.pathname === `/projects/${key}`}>
        {project.name}
      </a>
    {/each}
  </nav>
</header>

<slot />

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    min-width: 100%;
    grid-column: 2 / 3;
    background: var(--clr-secondary-bg);
  }

  // h1 {
  //   font-size: var(--fs-lrg);
  //   margin-block: var(--spacer-200);
  // }

  nav {
    // margin-bottom: var(--spacer-200);
    justify-self: end;
    padding-block: var(--gap-100);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--gap-100) var(--gap-100);
  }

  .active {
    text-decoration: underline solid var(--clr-highlight) 2px;
    text-underline-offset: 0.5rem;
  }
</style>
