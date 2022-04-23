<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects.js'
  import Title from '$lib/component/Title.svelte'
  import VendorIcons from '$lib/component/VendorIcons.svelte'

  $: currentProject = $projectsStore[$page.params.slug]
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<article class="spacer">
  <Title thumbnail={currentProject.thumbnail} thumbnail2={currentProject.thumbnail2}>
    <h1 class="title-med">{currentProject.name}</h1>
    <i>{currentProject.subTitle}</i>

    <div class="icons-wrap" slot="icons">
      {#each currentProject.techUsed as name}
        <VendorIcons {name} />
      {/each}
    </div>

    <div class="img-wrap" slot="thumbnails">
      <img src={currentProject.thumbnail} alt="Demo of the project" />
      <img src={currentProject.thumbnail2} alt="Demo of the project" />
    </div>
  </Title>

  <section class="wrap spacer">
    <header class="box-wrap">
      <h2 class="title-sml">{currentProject.overview.title}</h2>
      <a href={currentProject.link} class="box">
        <svg width="28" height="28">
          <use href="/img/main-icons.svg#link" />
        </svg>
      </a>

      <a href={currentProject.repo} class="box">
        <svg width="28" height="28">
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

  .icons-wrap {
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;
  }

  .img-wrap {
    // grid-area: img;
    justify-self: end;
    display: grid;
    align-items: center;
    grid-template-areas: 'l';

    img {
      grid-area: l;
      max-height: 250px;
      box-shadow: var(--shadow-5);
    }

    img:last-child {
      transform: translateX(-35px);
      // opacity: 99;
    }

    @media (min-width: $mediaSml) {
      img:first-child {
        transform: rotate(15deg);
      }
    }
  }

  .box-wrap {
    display: inline-flex;
    gap: 0.5rem;
  }

  .box {
    --fill: currentColor;
    padding: 4px;
    display: grid;
    place-content: center;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);
    border: 3px solid var(--clr-highlight);

    &:hover {
      --fill: var(--clr-highlight);
      background: var(--clr-primarty-bg);
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
