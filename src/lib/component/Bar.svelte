<div class="bar wrap"><slot /></div>

<style lang="scss">
  .bar {
    grid-column: 1 / -1;
    height: 33px;
    display: grid;
    align-items: center;
    background: var(--clr-secondary-bg);
    border-bottom: 2px solid var(--clr-gray);
    box-shadow: var(--shadow-2);
  }
</style>
