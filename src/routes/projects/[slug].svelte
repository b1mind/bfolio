<script>
  import { page } from '$app/stores'
  import Title from '$lib/component/Title.svelte'
  import { projectsStore } from '$lib/data/projects.js'

  $: currentProject = $projectsStore[$page.params.slug]
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<article class="spacer">
  <Title
    thumbnail={currentProject.thumbnail}
    thumbnail2={currentProject.thumbnail2}
    techUsed={currentProject.techUsed}
  >
    <h1 class="title-med">{currentProject.name}</h1>
    <i>{currentProject.subTitle}</i>
  </Title>

  <section class="wrap spacer">
    <header class="box-wrap">
      <h2 class="title-sml">{currentProject.overview.title}</h2>
      <a href={currentProject.link} class="box">
        <svg width="38" height="38">
          <use href="/img/main-icons.svg#link" />
        </svg>
      </a>

      <a href={currentProject.repo} class="box">
        <svg width="38" height="38">
          <use fill="unset" href="/img/social-icons.svg#github" />
        </svg>
      </a>
    </header>

    <div class="grid">
      <img src={currentProject.overview.img} alt={currentProject.overview.altText} />

      <div class="spacer">
        {@html currentProject.overview.content}
      </div>
    </div>
  </section>

  {#each currentProject.sections as section}
    <section class="wrap spacer">
      <h2 class="title-sml">{section.title}</h2>

      <div class="grid">
        {#if section.img}
          <img src={section.img} alt={section.altText} />
        {:else}
          <ul>
            {#each section.list as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}

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
    min-width: 100%;
  }

  .box-wrap {
    display: inline-flex;
    gap: 0.5rem;
  }

  .box {
    padding: 5px;
    display: grid;
    place-content: center;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);

    svg {
      filter: saturate(0%) brightness(0%);
    }
  }

  section {
    & > * {
      --spacer: var(--spacer-5);
    }
  }

  h2 {
    max-width: max-content;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);
  }

  i {
    display: block;
  }

  .grid {
    display: grid;
    gap: var(--gap-5);

    @media (min-width: $mediaSml) {
      grid-template-columns: 2fr 3fr;
    }
  }

  img {
    // max-width: 260px;
    max-height: 400px;
    // max-width: 280px;
    object-fit: cover;
  }
</style>
