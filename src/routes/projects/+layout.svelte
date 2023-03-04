<script>
	import { page } from '$app/stores'
	import { projectsStore } from '$lib/data/projects'
	import Bar from '$lib/component/Bar.svelte'
</script>

<div class="navBar wrap">
	<Bar>
		<nav class="subNav" aria-label="projects">
			{#each Object.entries($projectsStore) as [key, project]}
				<a
					href="/projects/{key}#main-content"
					aria-current={$page.url.pathname === `/projects/${key}` ? 'page' : 'false'}
				>
					{project.name}
				</a>
			{/each}
		</nav>
	</Bar>
</div>

<main class="spacer">
	<slot />
</main>

<style lang="scss">
	main {
		--spacer: var(--spacer-9);
		padding-block-start: var(--spacer-9);
		min-height: 100%;
		overflow: hidden;
	}

	.navBar {
		position: sticky;
		top: -1px;
		z-index: 999;
	}

	// svg {
	//   transform: scale(5) translateY(-10px);
	//   transform-origin: bottom left;
	// }

	nav {
		// margin-bottom: var(--spacer-200);
		justify-self: end;
		padding-block: var(--gap-2);
		display: flex;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--gap-5) var(--gap-5);
		font-size: var(--fs-4);
		line-height: 1.1;
		text-transform: lowercase;
	}

	[aria-current='page'] {
		text-decoration-line: underline;
		text-decoration-color: var(--clr-highlight);
		text-decoration-thickness: 2px;
		text-underline-offset: 0.6em;
	}
</style>
