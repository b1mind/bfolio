<script>
  import { page } from '$app/stores'
  import { projectsStore } from '$lib/data/projects.js'

  $: currentProject = $projectsStore[$page.params.slug]
  console.log(Object.keys($projectsStore))

  console.log($projectsStore[$page.params.slug])
</script>

<!-- //todo think about the injection, 
how is the data from the backend returned? does markup get injected? -->
<article>
  <header>
    <h2>{currentProject.name}</h2>
    <i>An interactive way to order a pizza</i>
  </header>

  <section>
    <h3>Overview</h3>
    <img src="https://picsum.photos/800/600?random=" alt="" />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo,
      architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias
      rerum ex repellat quas error id ipsa unde nisi optio ad!
    </p>
  </section>

  <section>
    <h3>Challenges</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo,
      architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias
      rerum ex repellat quas error id ipsa unde nisi optio ad!
    </p>
  </section>
</article>

<style lang="scss">
  h2,
  h3 {
    margin: 0;
  }
</style>
