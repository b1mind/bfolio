<script>
  import VendorIcons from '$lib/component/VendorIcons.svelte'

  export let thumbnail
  export let thumbnail2
  export let techUsed = ['svelte-thin']
</script>

<div class="wrap">
  <header class="spacer">
    <div class="title">
      <slot />

      <div class="icons-wrap">
        {#if techUsed}
          {#each techUsed as name}
            <VendorIcons {name} />
          {/each}
        {/if}
      </div>
    </div>

    <div class="img-wrap">
      {#if thumbnail}
        <img src={thumbnail} alt="Demo of the project" />
        <img src={thumbnail2} alt="Demo of the project" />
      {/if}
    </div>
  </header>
</div>

<style lang="scss">
  header {
    --spacer: var(--spacer-1);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'title img';
    align-items: center;
    background: linear-gradient(
      270deg,
      rgba(19, 23, 33, 1) 50%,
      rgba(40, 48, 68, 0) 100%
    );
  }

  .title {
    grid-area: title;
  }

  .icons-wrap {
    display: flex;
    gap: var(--gap-3);
    margin-block-start: var(--spacer-8);
  }

  .img-wrap {
    grid-area: img;
    justify-self: end;
    display: grid;
    grid-template-areas: 'l';
    justify-items: start;
    align-items: center;
    background: var(--clr-secondary-bg);

    img {
      grid-area: l;
      max-height: 300px;
      box-shadow: var(--shadow-5);
    }

    img:first-child {
      transform: rotate(15deg);
    }

    img:last-child {
      transform: translateX(-35px);
      // opacity: 99;
    }
  }
</style>
