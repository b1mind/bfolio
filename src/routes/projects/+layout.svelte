<script>
	import { page } from '$app/stores'
	import { projectsStore } from '$lib/data/projects'
	import Bar from '$lib/component/Bar.svelte'

	import { beforeNavigate, afterNavigate } from '$app/navigation'

	import { gsap } from 'gsap'
	import { Flip } from 'gsap/dist/Flip.js'

	gsap.registerPlugin(Flip)

	let state

	beforeNavigate(async (e) => {
		console.dir(e)
		if (e.from.route.id === '/projects') {
			const articles = gsap.utils.toArray('article')
			console.dir(articles)
			let totalOffset = 0
			articles
				.map((article) => [article, article.getBoundingClientRect()])
				.map(([article, offset]) => {
					totalOffset = totalOffset + offset.bottom
					console.log(offset.y)
					article.style.position = 'absolute'
					article.style.top = `${offset.y + 256}px`
					article.style.tranformOrigin = 'top'
				})
			console.log(totalOffset)
		}

		state = Flip.getState('.img > img, header > h2, i[data-sub]')
		console.dir(state)
	})

	afterNavigate(async (e) => {
		Flip.from(state, {
			targets: '.img-wrap > img, h1[data-title], i[data-sub]',
			duration: 0.75,
			scale: true,
			fade: true,
			ease: 'power4.out',
		})
	})

	// onNavigate(async (navigate) => {
	// 	let links = document.querySelectorAll('h2')
	// 	console.log(navigate)
	// 	console.log(links)
	// })
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
		color: var(--clr-white);
		text-decoration-line: underline;
		text-decoration-color: var(--clr-highlight);
		text-decoration-thickness: 2px;
		text-underline-offset: 10px;
	}
</style>
