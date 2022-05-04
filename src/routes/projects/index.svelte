<script>
  import { projectsStore } from '$lib/data/projects'
</script>

<div class="wrap">
  <div class="grid">
    <h1 class="title-sml">Proof of Work</h1>

    {#each Object.entries($projectsStore) as [key, project]}
      <!-- //todo find out if you want to link card or make button
      // refactor cards to for better semantics -->

      <article>
        <header class="spacer">
          <a href="/projects/{key}">
            <h2 class="title-lrg">
              {project.name}
            </h2>
            <svg>
              <use href="/img/main-icons.svg#info" />
            </svg>
          </a>
          <i>{project.subTitle}</i>
        </header>

        <!-- <div class="box-wrap">
          <a href={project.link} class="box">
            <svg width="28" height="28">
              <use href="/img/main-icons.svg#link" />
            </svg>
          </a>

          <a href={project.repo} class="box">
            <svg width="28" height="28">
              <use href="/img/social-icons.svg#github" />
            </svg>
          </a>
        </div> -->

        <div class="img">
          <img src={project.thumbnail} alt="{project.name} preview" />
        </div>
      </article>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../lib/scss/vars' as *;

  // .icons-wrap {
  //   margin-block-start: var(--spacer-8);
  //   display: flex;
  //   gap: var(--gap-3);
  //   flex-wrap: wrap;
  //   align-items: center;

  //   svg {
  //     --fill: var(--clr-primary);
  //   }

  //   a {
  //     display: inline-flex;
  //     gap: var(--gap-1);
  //     align-items: center;
  //   }
  // }

  .grid {
    display: grid;
    gap: var(--spacer-9);

    // @media (min-width: $mediaMed) {
    //   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    //   & article:last-child {
    //     min-width: 50%;
    //     grid-column: 1 / -1;
    //     justify-self: center;
    //   }
    // }
  }

  h1 {
    text-align: center;
  }

  header {
    --spacer: var(--spacer-1);
  }

  article {
    display: grid;
    gap: var(--gap-5);

    header {
      width: max-content;
      // background-color: var(--clr-secondary-bg);
      z-index: 9;

      & a {
        display: flex;
        gap: var(--gap-3);
      }

      & svg {
        --fill: var(--clr-primary);
        width: 25px;
        aspect-ratio: 1;
      }
    }
  }

  i {
    display: block;
  }

  .img {
    display: grid;
    border-radius: 3px;
    overflow: hidden;

    @media (min-width: $mediaSml) {
      grid-column: 2 / 3;
      grid-row: 1 / span 2;
    }

    img {
      grid-area: l;
      min-width: 100%;
      max-height: 350px;
      object-fit: cover;
    }
  }

  .box-wrap {
    grid-area: 2 / 1 / 3 / 2;
    place-self: start;
    display: flex;
    gap: 0.5rem;
  }

  .box {
    --fill: var(--clr-highlight);
    padding: 5px;
    display: grid;
    place-content: center;
    color: var(--clr-secondary-bg);
    background: var(--clr-secondary-bg);
    border: 2px solid var(--clr-highlight);

    &:hover {
      --fill: currentColor;
      background: var(--clr-highlight);
    }
  }
</style>
