<script>
  import { projectsStore } from '$lib/data/projects'
</script>

{#each Object.entries($projectsStore) as [key, project]}
  <!-- //todo find out if you want to link card or make button -->
  <a href="/projects/{key}">
    <article>
      <header>
        <h2>{project.name}</h2>
        <i>{project.subTitle}</i>
      </header>
      <img src={project.thumbnail} alt="{project.name} preview" />
    </article>
  </a>
{/each}

<style lang="scss">
  article {
    padding: 1rem;
    display: grid;

    & > * {
      grid-area: 1/-1;
    }
  }

  header {
    height: max-content;
    padding: 1rem;
    background-color: hsl(0 0% 0% / 0.8);
  }

  img {
    max-height: 300px;
    object-fit: cover;
    z-index: -99;
  }

  h2 {
    margin: 0;
  }
</style>
