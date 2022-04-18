<script>
  export let name = 'svelte-thin'
  // export let url = 'kit.svelte.dev'
  let icon = `/img/vendor-icons.svg#${name}`
</script>

<!-- <a href="https://{url}"> -->
<svg aria-label={name} width="32" height="32">
  <use href={icon} />
</svg>

<!-- </a> -->
<style lang="scss">
  svg {
    fill: var(--clr-primary);
    // filter: contrast(0%) brightness(150%);
  }

  // svg:hover {
  //   fill: var(--clr-highlight);
  // }
</style>
