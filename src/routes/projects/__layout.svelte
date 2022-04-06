<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'

  let currentTitle
  $: if ($page.url.pathname.split('/').length > 2) {
    currentTitle = $projectsStore[$page.url.pathname.split('/')[2]].subTitle
  } else {
    currentTitle = $page.url.pathname.split('/')[1]
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
    background: var(--clr-primary-bg);
  }

  // h1 {
  //   font-size: var(--fs-lrg);
  //   margin-block: var(--spacer-200);
  // }

  nav {
    // margin-bottom: var(--spacer-200);
    padding-block: var(--gap-100);
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
