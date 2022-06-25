<script>
  import { afterUpdate, onMount } from 'svelte'
  import { gsap } from 'gsap'

  export let techUsed = ['svelte']
  let tl

  //todo test if its better to just use actions
  onMount(() => {
    tl = gsap.timeline()
    tl.from('.icons-wrap > *', {
      delay: 0.4,
      opacity: 0,
      y: -20,
      stagger: { amount: 0.5, grid: 'auto', from: 'center' },
    })
  })

  afterUpdate(() => {
    tl.restart()
  })
</script>

<div class="icons-wrap">
  {#each techUsed as name}
    <div class="border">
      <svg width="32" height="32">
        <use href="/img/vendor-icons.svg#{name}" />
        <!-- <text x="0" y="30">{name}</text> -->
      </svg>
      <i>{name}</i>
    </div>
  {/each}
</div>

<style lang="scss">
  @use '../scss/vars' as *;

  .icons-wrap {
    --fill: var(--clr-white);
    margin-block-start: var(--spacer-8);
    display: flex;
    // grid-auto-flow: column;
    gap: var(--gap-3);
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: $mediaSml) {
      justify-content: center;
    }
  }

  .border {
    width: 80px;
    height: 80px;
    // aspect-ratio: 1;
    padding: 0.75rem;
    display: grid;
    place-items: center;
    font-size: var(--fs-4);
    border: 3px solid var(--clr-secondary-bg);
    border-radius: 100%;
    // border-radius: 3px;
  }
</style>
