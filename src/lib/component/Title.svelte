<div class="wrap">
  <header class="spacer">
    <div class="title spacer">
      <slot />

      <slot name="icons" />
    </div>

    <slot name="thumbnails" />
  </header>
</div>

<style lang="scss">
  @use '../scss/vars.scss' as *;

  header {
    --spacer: var(--spacer-1);

    padding: 1rem;
    display: grid;
    gap: var(--gap-5);
    align-items: center;
    // grid-template-areas: 'title' 'img';
    background: linear-gradient(0deg, rgba(19, 23, 33, 1) 20%, rgba(40, 48, 68, 0) 80%);
    border-radius: 3px;

    @media (min-width: $mediaSml) {
      grid-template-columns: 1fr 1fr;
      gap: var(--gap-8);
      // grid-template-areas: 'title img';
      background: linear-gradient(
        270deg,
        rgba(19, 23, 33, 1) 45%,
        rgba(40, 48, 68, 0) 95%
      );
    }
  }

  .title {
    --spacer: var(--spacer-2);
    // grid-area: title;
  }
</style>
