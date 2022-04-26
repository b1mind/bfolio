<script>
  import Title from '$lib/component/Title.svelte'
  import { projectsStore } from '$lib/data/projects'
</script>

<Title>
  <h1 class="title-med">Proof of Work</h1>
  <i>Samples of coding projects</i>

  <div class="icons-wrap" slot="icons">
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
</Title>

<div class="wrap">
  <div class="grid">
    {#each Object.entries($projectsStore) as [key, project]}
      <!-- //todo find out if you want to link card or make button
      // refactor cards to for better semantics -->

      <article>
        <header class="spacer">
          <a href="/projects/{key}">
            <b class="title-sml">
              {project.name}

              <svg width="22" height="22">
                <use href="/img/main-icons.svg#info" />
              </svg>
            </b>
          </a>
          <i>{project.subTitle}</i>
        </header>

        <div class="img">
          <img src={project.thumbnail} alt="{project.name} preview" />
          <div class="box-wrap">
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
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../lib/scss/vars.scss' as *;

  header {
    --spacer: var(--spacer-1);
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

  .grid {
    display: grid;
    grid-template-columns: 1fr;
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

  article {
    header {
      height: max-content;
      padding: 1rem;
      background-color: var(--clr-secondary-bg);
      z-index: 9;

      & svg {
        --fill: var(--clr-highlight);
        display: inline;
      }
    }
  }

  i {
    display: block;
  }

  .img {
    // grid-row: 1 / span 2;
    display: grid;
    grid-template-areas: 'l';

    img {
      grid-area: l;
      min-width: 100%;
      max-height: 350px;
      object-fit: cover;
    }
  }

  .box-wrap {
    margin: 0.5rem;
    grid-area: l;
    place-self: end;
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
