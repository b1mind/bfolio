<script>
  import { projectsStore } from '$lib/data/projects'
</script>

<div class="wrap">
  <div class="grid">
    <h1 class="title-sml">Recent Showcase</h1>

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

        <svg class="line" viewBox="0 0 348 88" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.0103 0.331029C10.3614 -0.184041 9.41788 -0.075598 8.90281 0.573243L0.509258 11.1467C-0.00581135 11.7956 0.102632 12.7391 0.751473 13.2542C1.40031 13.7692 2.34385 13.6608 2.85892 13.012L10.3199 3.61331L19.7185 11.0742C20.3673 11.5893 21.3109 11.4809 21.8259 10.832C22.341 10.1832 22.2326 9.23965 21.5837 8.72458L11.0103 0.331029ZM8.58745 1.67713C11.3383 25.612 18.2795 44.3798 31.2315 58.1538C44.1881 71.9327 62.9852 80.5293 89.0719 84.4744C141.14 92.3487 222.922 81.7783 347.382 55.9746L346.773 53.0371C222.23 78.858 140.972 89.2892 89.5205 81.5081C63.8474 77.6256 45.765 69.2303 33.4171 56.0987C21.0646 42.9623 14.2764 24.9012 11.5678 1.33459L8.58745 1.67713Z"
            fill="#131721"
          />
        </svg>

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
    grid-template-rows: auto 1fr;
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
      grid-template-columns: 1fr 1fr;
    }
  }

  i {
    display: block;
  }

  .line {
    display: none;
  }

  @media (min-width: $mediaSml) {
    .line {
      width: 95%;
      display: block;
      grid-row: 2 / 3;
      justify-self: center;
    }

    .img {
      grid-row: 1 / span 2;
    }
  }

  .img {
    display: grid;
    grid-template-areas: 'l';
    max-width: 420px;

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
