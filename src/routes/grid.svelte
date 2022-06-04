<script>
  const icons = ['html', 'css', 'scss', 'svg', 'svelte', 'json']
</script>

<div class="wrap">
  <div class="grid">
    <div class="circleLrg" />
    <div class="circleMed" />
    {#each icons as icon}
      <div class="icon-wrap" data-icon={icon}>
        <div class="icon">
          <svg><use href="/img/vendor-icons.svg#{icon}" /></svg>
          <div class="circleSml" />
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  .grid {
    place-self: center;
    width: 100%;
    max-width: 550px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto 1fr auto 1fr;
    grid-template-areas:
      '. c .'
      'h . s'
      '. . .'
      'svg . svelte'
      '. j .';
    place-items: center;
  }

  .circleLrg {
    grid-area: 1 / 1 / -1 / -1;
    width: 60%;
    aspect-ratio: 1;
    border: solid 3px var(--clr-highlight);
    border-radius: 50%;
  }

  .circleMed {
    grid-area: 1 / 1 / -1 / -1;
    width: 50%;
    aspect-ratio: 1;
    border: solid 3px var(--clr-highlight);
    border-radius: 50%;
  }

  // .icon-wrap {
  //   &::before {
  //     content: '';
  //     width: 10px;
  //     height: 3px;
  //     background-color: red;
  //     transform: translate(-100px, 100px);
  //   }
  // }

  .icon {
    width: 50px;
    height: 50px;
    display: grid;
    grid-template-areas: 'l';
    place-items: center;
    border-radius: 50%;
    background-color: var(--clr-secondary-bg);
    opacity: 0.99; //hack to pull out of stack

    &:hover {
      --fill: var(--clr-highlight);
    }

    & > * {
      grid-area: l;
    }
  }

  .circleSml {
    width: 80%;
    height: 80%;
    border: solid 1px transparent;
    border-radius: 50%;

    &:hover {
      border: solid 1px var(--clr-highlight);
      cursor: pointer;
    }
  }

  svg {
    width: 50%;
    height: 50%;
  }

  [data-icon='html'] {
    grid-area: h;
  }

  [data-icon='css'] {
    grid-area: c;
  }

  [data-icon='scss'] {
    --fill: var(--clr-white);
    grid-area: s;
  }

  [data-icon='svg'] {
    grid-area: svg;
  }

  [data-icon='json'] {
    grid-area: j;
  }

  [data-icon='gsap'] {
    grid-area: g;
  }

  [data-icon='figma'] {
    grid-area: f;
  }

  [data-icon='svelte'] {
    grid-area: svelte;
  }
</style>
