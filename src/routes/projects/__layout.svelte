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

    <div class="logo">
      <a href="/">
        <svg height="17" viewBox="0 0 125 117" xmlns="http://www.w3.org/2000/svg">
          <g class="one">
            <path
              fill="#ffffff"
              d="M24 44.9984H9V14.9984C9.00153 18.6099 3.73701 18.0063 0 17.9984V6.99838C9.95537 7.00583 7.42383 0.453084 8.98668 0C14.8419 0 18.1509 0.0337733 24 0V44.9984Z"
            />
            <path d="M24 54H9V69H24V54Z" />
            <path d="M24 78H9V93H24V78Z" />
            <path d="M24 102H9V117H24V102Z" />
          </g>

          <path
            d="M74 83C76.5 74 81.2187 63.1345 86.5 52.8315C92.3874 41.3165 98.6618 32.0525 104.463 25.0395C106.281 22.7884 107.836 21.5195 110 21V117H125V0.104633H110C107.403 0.104633 98.6185 6.85783 89.5276 20.3642C80.4368 33.784 73.829 45.2165 69.5 55C65.0845 45.1299 58.359 33.784 49.5279 20.624C40.3505 6.94441 34.684 0 32 0C32 12.1163 32 21 32 21C37.7142 27.9264 45.8916 41.2299 51.8655 52.8315C57.1469 63.0479 61.7966 73.3897 65 83C65.9524 85.9437 66 87 66.5 88C67 89 68 90 69.5 90C71 90 72 89 72.5147 88.0261C73.0571 87 73 86 74 83Z"
          />
        </svg>
      </a>
    </div>
  </nav>
</div>

<main class="spacer">
  <slot />
</main>

<style lang="scss">
  main {
    --spacer: var(--spacer-9);
    // height: 100%;
    padding-block-start: var(--spacer-9);
    min-height: 100%;
    overflow: hidden;
  }

  .navBar {
    position: sticky;
    top: 0;
    align-items: center;
    background: var(--clr-secondary-bg);
    z-index: 999;
  }

  // svg {
  //   transform: scale(5) translateY(-10px);
  //   transform-origin: bottom left;
  // }

  nav,
  .logo {
    grid-area: l;
    width: max-content;
  }

  nav {
    // margin-bottom: var(--spacer-200);
    justify-self: end;
    padding-block: var(--gap-2);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--gap-5) var(--gap-5);
    text-transform: lowercase;
    font-size: var(--fs-4);
  }

  .active {
    text-decoration: underline solid var(--clr-highlight) 2px;
    text-underline-offset: 0.5rem;
  }
</style>
