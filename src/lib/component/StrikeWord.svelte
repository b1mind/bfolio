<script>
	export let word
</script>

<span class="parent">
	{#each word as l}
		<span class="letter">{l}</span>
	{/each}
</span>

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
			translate: 0 0.1em;
			scale: 0 1;
			transition: scale 320ms ease-in, border 220ms;
			transform-origin: left;
			pointer-events: none;
			z-index: 1;
		}

		&:hover::after,
		&:focus::after {
			scale: 1 1;
			transform-origin: right;
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

		.letter:nth-child(odd) {
			z-index: 2;
		}

		.letter:nth-child(even) {
			z-index: -1;
		}
	}
</style>
