<script>
  export let thumbnail
  export let thumbnail2
</script>

<div class="wrap">
  <header class="spacer">
    <div class="title spacer">
      <slot />

      <slot name="icons">
        <a href="https://codepen.io/b1mind/">
          <svg width="24" height="24">
            <use href="/img/main-icons.svg#codepen" />
          </svg>
          <b>Showcase</b>
        </a>

        <a href="https://github.com/b1mind/">
          <svg width="24" height="24">
            <use href="/img/main-icons.svg#github" />
          </svg>
          <b>Profile</b>
        </a>
      </slot>
    </div>

    <slot name="thumbnails" />
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
    --fill: var(--clr-primary);
  }

  a {
    display: inline-flex;
    gap: var(--gap-1);
    align-items: center;
  }
</style>
