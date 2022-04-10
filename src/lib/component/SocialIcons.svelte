<script>
  export let name = 'twitter'
  export let url = 'twitter.com'
  let icon = `/img/social-icons.svg#${name}`
</script>

<a href="https://{url}">
  <svg aria-label={name} width="24" height="24">
    <use href={icon} />
  </svg>
</a>

<style lang="scss">
  /* todo add background styles or clean up */
  /* a {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 100%;
  }
  a:hover,
  a:focus {
    background: white;
  } */

  svg {
    filter: contrast(0%) brightness(150%);
  }

  svg:hover {
    filter: none;
  }
</style>
