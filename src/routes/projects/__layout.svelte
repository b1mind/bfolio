<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects'

  //fixme needs to move to root layout or duplicate
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

<div class="navBar wrap">
  <nav class="subNav">
    {#each Object.entries($projectsStore) as [key, project]}
      <a href="/projects/{key}" class:active={$page.url.pathname === `/projects/${key}`}>
        {project.name}
      </a>
    {/each}
  </nav>
</div>

<main class="spacer">
  <slot />
</main>

<style lang="scss">
  main {
    --spacer: var(--spacer-9);
    padding-block-start: var(--spacer-9);
    min-height: 100%;
    overflow: hidden;
  }

  .navBar {
    position: sticky;
    top: 0;
    height: 32.8px;
    align-items: center;
    background: var(--clr-secondary-bg);
    border-bottom: 2px solid var(--clr-gray);
    box-shadow: var(--shadow-2);
    z-index: 999;
  }

  // svg {
  //   transform: scale(5) translateY(-10px);
  //   transform-origin: bottom left;
  // }

  nav {
    // margin-bottom: var(--spacer-200);
    justify-self: end;
    padding-block: var(--gap-2);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--gap-5) var(--gap-5);
    font-size: var(--fs-4);
    line-height: 1.1;
    text-transform: lowercase;
  }

  .active {
    text-decoration: underline solid var(--clr-highlight) 2px;
    text-underline-offset: 0.6em;
  }
</style>
