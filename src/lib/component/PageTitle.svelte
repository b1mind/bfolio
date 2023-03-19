<script>
	import { page } from '$app/stores'
	$: path = $page.url.pathname.split('/')[1]
	import { staggerUp } from '$lib/utils/gsap.js'
</script>

<b use:staggerUp class="title-header">{path}</b>
<b aria-hidden="true" class="background">{path}</b>

<style lang="scss">
	b {
		display: block;
		font-size: var(--fs-lrg);
		margin-block: var(--spacer-7);
		text-align: right;
		text-decoration-line: underline;
		text-decoration-thickness: 0.075em;
		text-decoration-color: var(--clr-highlight);
		text-underline-offset: 0.075em;
	}

	b + b {
		// content: attr(data-header) '';
		position: absolute;
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		justify-self: center;
		align-self: center;
		color: var(--clr-secondary-bg);
		font-size: var(--fs-xl);
		font-weight: var(--fw-7);
		text-transform: uppercase;
		line-height: 1;
		user-select: none;
		z-index: -99;
	}
</style>
