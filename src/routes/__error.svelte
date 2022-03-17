<script context="module">
  //** @type {import('@sveltejs/kit').ErrorLoad} */

  export async function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    }
  }
</script>

<script>
  export let title
</script>

<!-- //todo format better error pages -->
<h1>{title}</h1>

<style lang="scss">
</style>
