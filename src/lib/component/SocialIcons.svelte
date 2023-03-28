<script>
	export let name = 'twitter'
	export let url = 'twitter.com'

	let icon = `/img/social-icons.svg#${name}`
</script>

<a href="https://{url}" aria-label={name}>
	<svg aria-hidden="true" width="24" height="24">
		<use href={icon} />
	</svg>
</a>

<style lang="scss">
	svg {
		--fill: var(--clr-gray);
	}

	svg:hover {
		--fill: unset;
	}
</style>
