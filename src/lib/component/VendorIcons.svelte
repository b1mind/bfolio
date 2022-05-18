<script>
  export let techUsed = ['svelte']
</script>

<div class="icons-wrap">
  {#each techUsed as name}
    <svg aria-label={name} width="32" height="32">
      <use href="/img/vendor-icons.svg#{name}" />
    </svg>
  {/each}
</div>

<style lang="scss">
  .icons-wrap {
    --fill: var(--clr-primary);
    margin-block-start: var(--spacer-8);
    display: flex;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;
  }
</style>
