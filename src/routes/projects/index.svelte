<script>
  import Title from '$lib/component/Title.svelte'
  import { projectsStore } from '$lib/data/projects'
</script>

<Title>
  <h1 class="title-med">Proof of Work</h1>
  <i>Samples of coding projects</i>
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

              <svg width="24" height="24">
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
              <svg width="38" height="38">
                <use href="/img/main-icons.svg#link" />
              </svg>
            </a>

            <a href={project.repo} class="box">
              <svg width="38" height="38">
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
  header {
    --spacer: var(--spacer-1);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacer-3);
  }

  article {
    header {
      // grid-row: 1 / 2;
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
      max-height: 200px;
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
    --fill: currentColor;
    padding: 5px;
    display: grid;
    place-content: center;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);
    border: 3px solid var(--clr-highlight);

    &:hover {
      --fill: var(--clr-highlight);
      background: var(--clr-primary-bg);
    }
  }
</style>
