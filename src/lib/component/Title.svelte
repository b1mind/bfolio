<script>
  import VendorIcons from '$lib/component/VendorIcons.svelte'

  export let thumbnail
  export let thumbnail2
  export let techUsed
</script>

<div class="wrap">
  <header class="spacer">
    <div class="title spacer">
      <slot />

      <div class="icons-wrap">
        {#if techUsed}
          {#each techUsed as name}
            <VendorIcons {name} />
          {/each}
        {:else}
          <a href="https://codepen.io/b1mind/">
            <svg width="24" height="24">
              <use href="/img/main-icons.svg#codepen" />
            </svg>
            <b>Codepen Profile</b>
          </a>

          <a href="https://github.com/b1mind/">
            <svg width="24" height="24">
              <use href="/img/main-icons.svg#github" />
            </svg>
            <b>Github Profile</b>
          </a>
        {/if}
      </div>
    </div>

    {#if thumbnail}
      <div class="img-wrap">
        <img src={thumbnail} alt="Demo of the project" />
        <img src={thumbnail2} alt="Demo of the project" />
      </div>
    {/if}
  </header>
</div>

<style lang="scss">
  @use '../scss/vars.scss' as *;

  header {
    --spacer: var(--spacer-1);

    min-height: 266px;
    padding: 1rem;
    display: grid;
    gap: var(--gap-5);
    align-items: center;
    // grid-template-areas: 'title' 'img';
    background: linear-gradient(
      270deg,
      rgba(19, 23, 33, 1) 50%,
      rgba(40, 48, 68, 0) 100%
    );

    @media (min-width: $mediaSml) {
      grid-template-columns: 3fr 2fr;
      // grid-template-areas: 'title img';
    }
  }

  .title {
    --spacer: var(--spacer-2);
    // grid-area: title;
  }

  svg {
    fill: var(--clr-primary);
  }

  .icons-wrap {
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;

    a {
      display: inline-flex;
      gap: var(--gap-1);
      align-items: center;
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
</style>
