<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects.js'

  $: currentProject = $projectsStore[$page.params.slug]
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<article>
  <header>
    <h2>{currentProject.name}</h2>
    <i>{currentProject.subTitle}</i>
  </header>

  {#each currentProject.sections as section}
    <section>
      <h3>{section.title}</h3>
      <img src={section.img} alt={section.altText} />

      <p>{section.content}</p>
    </section>
  {/each}
</article>

<style lang="scss">
  h2,
  h3 {
    margin: 0;
  }

  img {
    // max-width: 280px;
    width: max(280px, 100%);
    max-height: 300px;
    object-fit: cover;
    z-index: -99;
  }
</style>
