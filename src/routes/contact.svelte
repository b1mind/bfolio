<script>
  const emailAddress = 'b@1mind.dev'

  function submitHandler(e) {
    const emailSubject = e.target.elements.subject.value
    const emailBody = e.target.elements.body.value
    const mailTo = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
    document.location.href = mailTo
  }
</script>

<main>
  <div class="bar" />
  <div class="wrap">
    <svg class="overlay"> <use href="/img/main-icons.svg#mail-at" /></svg>
    <article>
      <header class="spacer">
        <h1 class="title-med">Get in touch</h1>

        <div class="icons-wrap">
          <a href="mailto:{emailAddress}">
            <svg width="32" height="32">
              <use href="/img/main-icons.svg#mail-send" />
            </svg>
            <b>b@1mind.dev</b>
          </a>

          <a href="https://twitter.com/b1mind/">
            <svg width="32" height="32">
              <use href="/img/social-icons.svg#twitter" />
            </svg>
            <b>@b1mind</b>
          </a>

          <a href="https://www.linkedin.com/in/brent-morton-86636b192">
            <svg width="32" height="32">
              <use href="/img/social-icons.svg#linkedIn" />
            </svg>
            <b>Brent Morton</b>
          </a>
        </div>
      </header>

      <form class="spacer" on:submit|preventDefault={submitHandler}>
        <b class="title-sml">Email</b>
        <label for="subject">Subject:<input type="text" name="subject" /></label>
        <label for="body">Body:<textarea rows="5" name="body" /></label>

        <button type="submit">Send</button>
      </form>
    </article>
  </div>
</main>

<style lang="scss">
  @use '../lib/scss/vars.scss' as *;

  main {
    display: grid;
    overflow: hidden;
    z-index: 0;
  }

  .bar {
    height: 32.8px;
    background: var(--clr-secondary-bg);
    border-bottom: 2px solid var(--clr-gray);
  }

  .overlay {
    --fill: var(--clr-secondary-bg);
    align-self: end;
    justify-self: center;
    transform: translate(-120px, -140px) scale(3.5);
    z-index: -9;

    @media (max-width: $mediaSml) {
      // justify-self: end;
      align-self: start;
      transform: translate(0, 150px) scale(2.5);
    }
  }

  .overlay,
  article {
    grid-area: l;
  }

  article {
    margin-block-start: var(--spacer-9);
    display: grid;
    gap: var(--gap-9);

    @media (min-width: $mediaSml) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .icons-wrap {
    max-width: max-content;
    display: grid;
    gap: var(--gap-5);

    svg {
      --fill: var(--clr-primary);
    }

    a {
      display: inline-flex;
      gap: var(--gap-1);
      align-items: center;
    }
  }

  label,
  input,
  textarea {
    display: block;
    min-width: 100%;
  }

  input,
  textarea {
    color: var(--clr-white);
    // background-color: var(--clr-secondary-bg);
    background-color: var(--clr-primary-bg);
    border: 2px solid var(--clr-gray);
    // border: none;
    resize: none;

    &:active,
    &:focus {
      outline-color: var(--clr-highlight);
      outline-style: inset;
      border: 2px solid var(--clr-highlight);
    }
  }

  button {
    --fill: var(--clr-highlight);
    padding-block: 0.25rem;
    padding-inline: 1.25rem;
    display: grid;
    place-content: center;
    color: var(--clr-highlight);
    font-weight: var(--fw-5);
    background: var(--clr-secondary-bg);
    border: 2px solid var(--clr-highlight);
    cursor: pointer;

    &:hover {
      color: var(--clr-secondary-bg);
      background: var(--clr-highlight);
      border: 2px solid var(--clr-highlight);
    }
  }
</style>
