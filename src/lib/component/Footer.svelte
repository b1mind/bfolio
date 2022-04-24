<script>
  import SocialIcons from './SocialIcons.svelte'

  const icons = [
    {
      name: 'twitter',
      url: 'twitter.com/b1mind/',
    },
    {
      name: 'twitch',
      url: 'twitch.tv/b1mind/',
    },
    {
      name: 'github',
      url: 'github.com/b1mind/',
    },
    {
      name: 'codepen',
      url: 'codepen.io/b1mind/',
    },
  ]
</script>

<footer class="container">
  <!-- todo find out about how to a11y this -->
  <!-- visually hidden text node (span) -->
  <nav class="social" aria-label="social links">
    <ul>
      {#each icons as icon}
        <li>
          <SocialIcons name={icon.name} url={icon.url} />
        </li>
      {/each}
    </ul>
  </nav>
</footer>

<style lang="scss">
  @use '../scss/vars' as *;
  footer {
    margin-top: var(--spacer-9);
  }

  ul {
    padding: var(--gap-6) 0;
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    gap: 2rem;
    list-style: none;
  }
</style>
