<script>
  // import { page } from '$app/stores'

  // $: path = $page.url.pathname
</script>

<!-- //test how does a screen reader read mainNav as camelCase? reason to use spinal?-->
<header class="wrap">
  <nav class="mainNav">
    <div class="logo">
      <b>Bren</b>
      <svg height="36" viewBox="0 0 125 117" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 44.9984H9V14.9984C9.00153 18.6099 3.73701 18.0063 0 17.9984V6.99838C9.95537 7.00583 7.42383 0.453084 8.98668 0C14.8419 0 18.1509 0.0337733 24 0V44.9984Z"
          fill="#ffffff"
        />
        <path
          d="M74 83C76.5 74 81.2187 63.1345 86.5 52.8315C92.3874 41.3165 98.6618 32.0525 104.463 25.0395C106.281 22.7884 107.836 21.5195 110 21V117H125V0.104633H110C107.403 0.104633 98.6185 6.85783 89.5276 20.3642C80.4368 33.784 73.829 45.2165 69.5 55C65.0845 45.1299 58.359 33.784 49.5279 20.624C40.3505 6.94441 34.684 0 32 0C32 12.1163 32 21 32 21C37.7142 27.9264 45.8916 41.2299 51.8655 52.8315C57.1469 63.0479 61.7966 73.3897 65 83C65.9524 85.9437 66 87 66.5 88C67 89 68 90 69.5 90C71 90 72 89 72.5147 88.0261C73.0571 87 73 86 74 83Z"
        />
        <path d="M24 54H9V69H24V54Z" />
        <path d="M24 78H9V93H24V78Z" />
        <path d="M24 102H9V117H24V102Z" />
      </svg>

      <b>orton</b>
    </div>

    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/about">About</a>
  </nav>

  <svg
    class="logo-bg"
    width="100%"
    height="100%"
    viewBox="0 0 125 117"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 44.9984H9V14.9984C9.00153 18.6099 3.73701 18.0063 0 17.9984V6.99838C9.95537 7.00583 7.42383 0.453084 8.98668 0C14.8419 0 18.1509 0.0337733 24 0V44.9984Z"
    />
    <path
      d="M74 83C76.5 74 81.2187 63.1345 86.5 52.8315C92.3874 41.3165 98.6618 32.0525 104.463 25.0395C106.281 22.7884 107.836 21.5195 110 21V117H125V0.104633H110C107.403 0.104633 98.6185 6.85783 89.5276 20.3642C80.4368 33.784 73.829 45.2165 69.5 55C65.0845 45.1299 58.359 33.784 49.5279 20.624C40.3505 6.94441 34.684 0 32 0C32 12.1163 32 21 32 21C37.7142 27.9264 45.8916 41.2299 51.8655 52.8315C57.1469 63.0479 61.7966 73.3897 65 83C65.9524 85.9437 66 87 66.5 88C67 89 68 90 69.5 90C71 90 72 89 72.5147 88.0261C73.0571 87 73 86 74 83Z"
    />
    <path d="M24 54H9V69H24V54Z" />
    <path d="M24 78H9V93H24V78Z" />
    <path d="M24 102H9V117H24V102Z" />
  </svg>
</header>

<style lang="scss">
  header {
    //fix need mobile fix or % (@supports for dvt and new vp units?)
    min-height: 100vh;
    grid-template-areas: '. l .';
    overflow: hidden;
    z-index: 0;

    & > * {
      grid-area: l;
    }
  }

  .logo {
    --font-spacing: 1px;

    justify-self: center;
    max-height: 35px;
    display: grid;
    grid-auto-flow: column;
    font-size: var(--fs-5);
    letter-spacing: var(--font-spacing);
    z-index: 999;

    & > :last-child {
      align-self: end;
    }

    b {
      line-height: 0.8;
    }

    svg {
      margin-inline: 0.15rem;
      fill: var(--clr-primary);
    }
  }

  nav {
    // grid-column: 1 / -1;
    // grid-column: 2 / 3;
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

  .logo-bg {
    fill: var(--clr-secondary-bg);
    transform: scale(1.5) rotate(-25deg);
    // opacity: 50%;
    z-index: -999;
  }
</style>
