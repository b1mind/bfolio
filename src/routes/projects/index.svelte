<script>
  import { projectsStore } from '$lib/data/projects'
</script>

{#each Object.entries($projectsStore) as [key, project]}
  <!-- //todo find out if you want to link card or make button -->
  <article class="wrap">
    <header class="spacer">
      <a href="/projects/{key}">
        <h2>{project.name}</h2>
      </a>
      <i>{project.subTitle}</i>
    </header>
    <div class="img">
      <img src={project.thumbnail} alt="{project.name} preview" />
    </div>
  </article>
{/each}

<style lang="scss">
  article {
    border: 3px solid var(--clr-);
  }
  .img {
    display: grid;
    grid-template-areas: 'l';

    img {
      grid-area: l;
    }

    &::after {
      content: '';
      grid-area: l;
      place-self: end;
      margin: 0.5rem;
      width: 45px;
      height: 45px;
      display: block;
      background: var(--clr-highlight);
    }
  }

  header {
    --spacer: 0.5rem;
    height: max-content;
    padding: 1rem;
    background-color: var(--clr-secondary-bg);

    i {
      display: block;
    }
  }

  img {
    min-width: 100%;
    max-height: 300px;
    object-fit: cover;
    z-index: -99;
  }
</style>
