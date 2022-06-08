<script>
  export let techUsed = ['svelte']
</script>

<div class="icons-wrap">
  {#each techUsed as name}
    <div class="border">
      <svg aria-label={name} width="32" height="32">
        <use href="/img/vendor-icons.svg#{name}" />
      </svg>
    </div>
  {/each}
</div>

<style lang="scss">
  .icons-wrap {
    // --fill: var(--clr-highlight);
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;

    .border {
      padding: 0.75rem;
      // border: 2px solid var(--clr-highlight);
      border: 3px solid var(--clr-secondary-bg);
      border-radius: 50%;
    }
  }
</style>
