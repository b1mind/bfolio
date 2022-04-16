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
      <div class="grid">
        <img src={section.img} alt={section.altText} />

        <!-- note @html to render the html content of the section -->
        <div class="spacer">
          {@html section.content}
        </div>
      </div>
    </section>
  {/each}
</article>

<style lang="scss">
  @use '../../lib/scss/vars.scss' as *;

  article {
    // grid-column: 1 / -1;
    grid-column: 2 / 3;
    min-width: 100%;
  }

  header {
    --spacer: var(--spacer-1);
  }

  section {
    // --spacer: var(--spacer-9);
    margin-block: var(--spacer-9);

    & > * {
      --spacer: var(--spacer-5);
    }

    // & + section {
    //   --spacer: 15rem;
    // }
  }

  h3 {
    max-width: max-content;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);
  }

  i {
    display: block;
    font-size: 1.15rem;
  }

  .grid {
    display: grid;
    gap: var(--gap-5);

    @media (min-width: $mediaSml) {
      grid-template-columns: 2fr 3fr;
    }
  }

  img {
    max-width: 260px;
    // max-height: 400px;
    // max-width: 280px;
    // object-fit: cover;
    z-index: -99;
  }
</style>
