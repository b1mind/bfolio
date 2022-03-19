<script>
  import { page } from '$app/stores'
  import SocialIcons from './SocialIcons.svelte'

  $: path = $page.url.pathname

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

{#if path !== '/'}
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
{/if}

<style lang="scss">
  @use '../scss/vars' as *;

  footer {
    grid-column: 2 / 3;
  }

  ul {
    margin: 0;
    padding: 1rem 0;
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    gap: 2rem;
    list-style: none;
  }
</style>
