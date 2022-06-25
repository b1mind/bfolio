<script>
  import PageTitle from '$lib/component/PageTitle.svelte'
</script>

<header class="wrap spacer">
  <a class="reader-only" href="#main-content">Skip to content</a>
  <nav class="mainNav" aria-label="main">
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>

    <div class="logo">
      <a href="/" aria-label="home">
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

  <PageTitle />
</header>

<style lang="scss">
  @use '../scss/vars' as *;

  header {
    position: sticky;
    top: 0;
    background-color: var(--clr-primary-bg);
    overflow: hidden;
    z-index: 0;
  }

  nav {
    justify-self: end;
    max-width: max-content;
    margin-block-start: var(--spacer-3);
    margin-block-end: var(--spacer-8);
    display: grid;
    grid-auto-flow: column;
    gap: var(--gap-5);
    place-items: center;

    @media (max-width: $mediaSml) {
      // font-size: var(--fs-4);
      gap: var(--gap-4);
    }
  }

  a {
    display: inline-block;
    text-transform: uppercase;
    font-weight: var(--fw-7);
  }

  .reader-only {
    padding-block: 0.25rem;
    padding-inline: 0.75rem;
    overflow: hidden;
    position: absolute;
    background-color: var(--clr-secondary-bg);
  }

  .reader-only:not(:focus) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    // overflow: hidden;
    // position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
