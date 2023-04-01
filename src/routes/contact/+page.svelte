<script>
	import Bar from '$lib/component/Bar.svelte'

	const emailAddress = 'b@1mind.dev'

	function submitHandler(e) {
		const emailSubject = e.target.elements.subject.value
		const emailBody = e.target.elements.body.value
		const mailTo = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`
		document.location.href = mailTo
	}
</script>

<Bar />
<main id="main-content" class="wrap" tabindex="-1">
	<svg class="email-bg"> <use href="/img/main-icons.svg#mail-at" /></svg>
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

				<a href="https://www.linkedin.com/in/b1mind">
					<svg width="32" height="32">
						<use href="/img/social-icons.svg#linkedIn" />
					</svg>
					<b>Brent Morton</b>
				</a>
			</div>
		</header>

		<form class="spacer" on:submit|preventDefault={submitHandler}>
			<b class="title-sml">
				<svg width="32" height="32">
					<use href="/img/main-icons.svg#mail-send" />
				</svg>
				Email
			</b>
			<label class="spacer" for="subject">
				<b> Subject: </b>
				<input type="text" name="subject" required />
			</label>

			<label class="spacer" for="body">
				<b> Body: </b>
				<textarea rows="5" name="body" required />
			</label>

			<button type="submit">Send</button>
		</form>
	</article>
</main>

<style lang="scss">
	@use '../../lib/scss/vars' as *;

	main {
		display: grid;
		overflow: hidden;
		z-index: 0;
	}

	.email-bg {
		--fill: var(--clr-secondary-bg);
		align-self: end;
		justify-self: center;
		transform: translate(-120px, -140px) scale(2.5);
		z-index: -9;

		@media (max-width: $mediaSml) {
			// justify-self: end;
			align-self: start;
			transform: translate(0, 150px) scale(1.5);
		}
	}

	.email-bg,
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

		a {
			display: inline-flex;
			gap: var(--gap-1);
			align-items: center;
		}
	}

	a svg,
	b svg {
		--fill: var(--clr-primary);
	}

	b {
		display: inline-flex;
		gap: var(--gap-1);
		align-items: center;
	}

	label,
	input,
	textarea {
		display: block;
		min-width: 100%;
	}

	input,
	textarea {
		--spacer: var(--spacer-2);
		color: var(--clr-white);
		// background-color: var(--clr-secondary-bg);
		background-color: var(--clr-primary-bg);
		border: 2px solid var(--clr-gray);
		// border: none;
		resize: none;
		border-radius: 3px;

		&:active,
		&:focus {
			outline-color: var(--clr-highlight);
			outline-style: inset;
			border: 2px solid var(--clr-highlight);
		}
	}

	button {
		--fill: var(--clr-primary);
		padding-block: 0.25rem;
		padding-inline: 1.25rem;
		display: grid;
		place-content: center;
		color: var(--clr-primary);
		font-weight: var(--fw-5);
		background: var(--clr-secondary-bg);
		border: 2px solid var(--clr-primary);
		border-radius: 3px;
		cursor: pointer;

		&:hover {
			color: var(--clr-secondary-bg);
			background: var(--clr-primary);
			border: 2px solid var(--clr-primary);
		}
	}
</style>
