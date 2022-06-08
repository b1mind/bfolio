<script>
  import VendorIcons from '$lib/component/VendorIcons.svelte'
  import { projectsStore } from '$lib/data/projects'

  const techUsed = ['html', 'css', 'svg', 'json', 'svelte', 'figma', 'gsap']
</script>

<!-- //note main is in __layout -->
<div class="wrap">
  <div class="grid" id="main-content" tabindex="-1">
    <header class="headerMain spacer">
      <h1 class="title-sml">Recent Work</h1>
      <i>a showcase of current skills</i>
      <VendorIcons {techUsed} />
      <svg height="50%">
        <use href="/img/lines.svg#wiggly-down" />
      </svg>
    </header>

    {#each Object.entries($projectsStore) as [key, project], dex}
      <!-- <article>
        <header class="spacer">
          <h2>
            <a href="/projects/{key}"> -->
      <!-- //note find out if this is even needed other than Region Role titles -->

      <article aria-labelledby={project.name}>
        <header class="spacer">
          <h2 id={project.name}>
            <a href="/projects/{key}">
              {project.name}
              <svg>
                <use href="/img/main-icons.svg#info" />
              </svg>
            </a>
          </h2>
          <i>{project.subTitle}</i>
        </header>

        <svg class="line">
          <use href="/img/lines.svg#swoop-left" />
        </svg>

        <div class="img">
          <img
            src={project.thumbnail}
            alt="{project.name} preview"
            width="420px"
            height="380px"
            loading="lazy"
          />
        </div>
      </article>
    {/each}

    <footer>
      <h2 class="title-sml">More work</h2>
      <button disabled>click for something fun</button>
      <i>or see more personal projects below</i>

      <div class="icons-wrap">
        <a href="https://codepen.io/b1mind/">
          <svg width="32" height="32">
            <use href="/img/main-icons.svg#codepen" />
          </svg>
          <b>Showcase</b>
        </a>

        <a href="https://github.com/b1mind/">
          <svg width="32" height="32">
            <use href="/img/main-icons.svg#github" />
          </svg>
          <b>Profile</b>
        </a>
      </div>
    </footer>
  </div>
</div>

<style lang="scss">
  @use '../../lib/scss/vars' as *;

  .grid {
    display: grid;
    gap: var(--spacer-9);
  }

  .headerMain {
    display: grid;
    place-items: center;
  }

  .icons-wrap {
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;

    svg {
      --fill: var(--clr-primary);
    }

    a {
      display: inline-flex;
      gap: var(--gap-1);
      align-items: center;
    }
  }

  i {
    display: block;
  }

  header {
    --spacer: var(--spacer-1);
  }

  article {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: var(--gap-9);

    header {
      width: max-content;

      a {
        display: flex;
        gap: var(--gap-3);

        &:hover {
          text-decoration-thickness: 0.1em;
          text-decoration-line: underline;
          text-decoration-color: var(--clr-highlight);
          text-underline-offset: 0.035em;
        }
      }

      svg {
        --fill: var(--clr-primary);
        width: 25px;
        aspect-ratio: 1;
      }
    }

    @media (min-width: $mediaSml) {
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
  }

  .line {
    display: none;
  }

  @media (min-width: $mediaSml) {
    .line {
      --fill: var(--clr-highlight);
      width: 85%;
      display: block;
      grid-row: 2 / 3;
      justify-self: center;
    }

    .img {
      grid-row: 1 / span 2;
    }
  }

  .img {
    display: grid;
    grid-template-areas: 'l';
    max-width: 420px;

    img {
      grid-area: l;
      height: 100%;
      object-fit: cover;
      transform: translate(-15px, -15px);
      box-shadow: var(--shadow-5);
      border-radius: 4px;
      z-index: 1;
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      grid-area: l;
      background-color: var(--clr-secondary-bg);
      border-radius: 4px;
    }
  }

  footer {
    display: grid;
    place-items: center;
  }
</style>
