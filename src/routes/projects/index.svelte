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
            <h2>
              {project.name}
            </h2>
            <svg>
              <use href="/img/main-icons.svg#info" />
            </svg>
          </a>
          <i>{project.subTitle}</i>
        </header>

        <div class="img">
          <img src={project.thumbnail} alt="{project.name} preview" />
        </div>
      </article>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../../lib/scss/vars' as *;

  .grid {
    display: grid;
    gap: var(--spacer-9);
  }

  h1 {
    text-align: center;
  }

  header {
    --spacer: var(--spacer-1);
  }

  article {
    display: grid;
    gap: var(--gap-8);

    header {
      width: max-content;

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

    @media (min-width: $mediaSml) {
      grid-template-columns: 2fr 1fr;
    }
  }

  i {
    display: block;
  }

  .img {
    display: grid;
    grid-template-areas: 'l';

    img {
      grid-area: l;
      min-width: 100%;
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
</style>
