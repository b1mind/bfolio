<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects.js'
  import Title from '$lib/component/Title.svelte'

  $: currentProject = $projectsStore[$page.params.slug]
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<div class="spacer">
  <Title>
    <h1 class="title-med">{currentProject.name}</h1>
    <i>{currentProject.subTitle}</i>

    <div class="icons-wrap" slot="icons">
      {#each currentProject.techUsed as name}
        <svg aria-label={name} width="32" height="32">
          <use href="/img/vendor-icons.svg#{name}" />
        </svg>
      {/each}
    </div>

    <div class="img-wrap" slot="thumbnails">
      <img src={currentProject.thumbnail} alt="Visual of the project" />
      <img src={currentProject.thumbnail2} alt="Visual of the project" />
    </div>
  </Title>

  <article class="wrap spacer">
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
  </article>

  <article class="wrap spacer">
    <h2 class="title-sml">Highlight</h2>
    <ul>
      {#each currentProject.highlight as highlight, id}
        <li><b>{highlight}</b><i>{id + 1}</i></li>
      {/each}
    </ul>
    {#each currentProject.sections as section}
      <section class="spacer">
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
</div>

<style lang="scss">
  @use '../../lib/scss/vars' as *;

  .icons-wrap {
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;

    & svg {
      --fill: var(--clr-primary);
    }
  }

  .img-wrap {
    // grid-area: img;
    justify-self: end;
    display: grid;
    align-items: center;
    grid-template-areas: 'l';

    img {
      grid-area: l;
      max-height: 400px;
      box-shadow: var(--shadow-5);
    }

    img:last-child {
      transform: translateX(-70px) scale(0.75);
    }

    @media (min-width: $mediaSml) {
      img:first-child {
        transform: rotate(13deg);
      }
    }
  }

  .box-wrap {
    display: inline-flex;
    gap: 0.5rem;
  }

  .box {
    --fill: var(--clr-highlight);
    padding: 4px;
    display: grid;
    place-content: center;
    color: var(--clr-secondary-bg);
    background: var(--clr-secondary-bg);
    border: 2px solid var(--clr-highlight);
    border-radius: 3px;

    &:hover {
      --fill: currentColor;
      background: var(--clr-highlight);
    }
  }

  article,
  section {
    & > * {
      --spacer: var(--spacer-5);
    }
  }

  section {
    --spacer: var(--spacer-9);
  }

  article {
    ul {
      padding: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--gap-5);
    }

    li {
      display: grid;
      grid-template-areas: 'l';
      place-items: center;

      & > * {
        grid-area: l;
      }

      b {
        align-self: end;
        text-transform: lowercase;
        // color: var(--clr-highlight);
        transform: translate(0, -5px);
        z-index: 9;
      }

      i {
        max-width: max-content;
        padding-block: 0.1em;
        padding-inline: 0.35em;
        color: var(--clr-primary-bg);
        font-size: var(--fs-lrg);
        font-weight: var(--fw-7);
        background-color: var(--clr-secondary-bg);
        border-radius: 3px;
      }
    }
  }

  h2 {
    max-width: max-content;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    color: var(--clr-secondary-bg);
    background: var(--clr-highlight);
    border-radius: 3px;
  }

  h3 {
    text-transform: lowercase;
    text-decoration: underline var(--clr-highlight);
  }

  i {
    display: block;
  }

  .grid {
    display: grid;
    gap: var(--gap-5);

    @media (min-width: $mediaSml) {
      grid-template-columns: 3fr 2fr;
    }
  }

  img {
    max-height: 400px;
    object-fit: cover;
    border-radius: 3px;
  }
</style>
