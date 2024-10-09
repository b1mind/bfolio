<script>
	export let word
</script>

<div class="parent" aria-label={word}>
	{#each word as l}
		<span aria-hidden="true" class="letter">{l}</span>
	{/each}
</div>

<style lang="scss">
	.parent {
		position: relative;
		display: grid;
		grid-auto-flow: column;
		align-items: center;

		// &::before {
		// 	content: '';
		// 	position: absolute;
		// 	min-width: 100%;
		// 	translate: 0 0.1em;
		// 	scale: 0 1;
		// 	transition: scale 320ms ease-in;
		// 	transform-origin: left;
		// 	z-index: 1;
		// }

		// &:hover::before,
		// &:focus::before {
		// 	scale: 1 1;
		// 	transform-origin: right;
		// 	border-bottom: 0.15em solid var(--clr-highlight);
		// }

		&::after {
			content: '';
			position: absolute;
			min-width: 100%;
			border-bottom: 0.15em solid var(--clr-white);
			transform: translateY(0.1em) scaleX(0);
			transform-origin: left;
			// needs more support?
			// translate: 0 0.1em;
			// scale: 0 1;
			transition: transform 320ms ease-in, border 220ms;
			pointer-events: none;
			z-index: 1;
		}

		&:hover::after,
		&:focus::after {
			transform: translateY(0.1em) scaleX(1);
			transform-origin: right;
			// scale: 1 1;
			border-bottom: 0.15em solid var(--clr-highlight);
		}

		.letter {
			position: relative;
			// padding-inline: 0.1rem;
			// transition: scale 250ms ease-out;
			// transform-origin: center;
		}

		// span:hover {
		// 	scale: 1.3;
		// }

		.letter:nth-child(even) {
			z-index: 2;
		}

		.letter:nth-child(odd) {
			z-index: -1;
		}
	}
</style>
