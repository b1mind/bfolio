<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects.js'

  $: currentProject = $projectsStore[$page.params.slug]
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<article>
  <header class="wrap spacer">
    <h2>{currentProject.name}</h2>
    <i>{currentProject.subTitle}</i>
  </header>

  {#each currentProject.sections as section}
    <section class="wrap spacer">
      <h3>{section.title}</h3>
      <img src={section.img} alt={section.altText} />

      <!-- note @html to render the html content of the section -->
      <div class="spacer">
        {@html section.content}
      </div>
    </section>
  {/each}
</article>

<style lang="scss">
  article {
    // grid-column: 1 / -1;
    grid-column: 2 / 3;
    min-width: 100%;
    font-size: 1.15rem;
  }

  header {
    --spacer: 0.5rem;
    margin-bottom: var(--spacer-200);
  }

  section {
    --spacer: var(--spacer-100);
    margin-bottom: var(--spacer-200);
  }

  i {
    display: block;
  }

  img {
    // max-width: 280px;
    width: max(280px, 100%);
    max-height: 300px;
    object-fit: cover;
    z-index: -99;
  }
</style>
