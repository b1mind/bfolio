<script>
  import { projectsStore } from '$lib/data/projects'
</script>

{#each Object.entries($projectsStore) as [key, project]}
  <!-- //todo find out if you want to link card or make button -->
  <article>
    <header class="spacer">
      <a href="/projects/{key}">
        <h2>{project.name}</h2>
      </a>
      <i>{project.subTitle}</i>
    </header>
    <img src={project.thumbnail} alt="{project.name} preview" />
  </article>
{/each}

<style lang="scss">
  article {
    display: grid;

    & > * {
      grid-area: 1/-1;
    }
  }

  header {
    --spacer: 0.5rem;
    height: max-content;
    padding: 1rem;
    background-color: hsl(0 0% 0% / 0.8);

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
