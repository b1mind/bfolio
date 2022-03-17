<script>
  let project = [
    {
      title: '',
      subTitle: '',
      sections: {
        title: '',
        content: '',
        img: 'url',
        altText: '',
      },
    },
  ]
</script>

<article>
  <header>
    <h1>{project.title}</h1>

    <i>An interactive way to order a pizza</i>
  </header>

  <section>
    <h3>Overview</h3>
    "https://picsum.photos/800/600?random="
    <img src="https://picsum.photos/800/600?random=" alt={project.sections.altText} />

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

<style>
  h1,
  h2,
  h3 {
    margin: 0;
  }
</style>
