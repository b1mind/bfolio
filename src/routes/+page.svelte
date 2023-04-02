<script context="module">
	export let prerender = true
</script>

<script>
	import { dev } from '$app/environment'
	import { onMount } from 'svelte'
	import { gsap } from 'gsap'

	let tl

	onMount(async () => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		tl = gsap.timeline({ defaults: { duration: reduceMotion ? '1.25' : '0.5' } })

		const links = gsap.utils.toArray('.mainNav > a')

		tl.add('start')

		if (!reduceMotion) {
			gsap.set(links, { opacity: 0, x: 200 })
			gsap.set('.logo > b', { opacity: 0 })
			gsap.set('.logo', { opacity: 0, y: '23vh', scale: 4, translateX: 15 })
			gsap.set('.hidden', { opacity: 0 })

			tl.to('.logo', { duration: 1, opacity: 1 }, 'start')
			tl.from(
				'.logo-bg',
				{
					duration: 1.5,
					scale: 35,
					ease: 'power2.out',
				},
				'<',
			)

			tl.to('.logo', { y: 0, scale: 1, translateX: 0, ease: 'sine.in' }, '>-0.5')
			tl.to('.logo > b', { opacity: 1 }, '>-0.1')
			tl.to(
				links,
				{
					opacity: 1,
					x: 0,
					stagger: { amount: 0.24, from: 'end' },
					ease: 'back.out(2.4)',
				},
				'>-0.35',
			)
		} else {
			tl.to('.hidden', { opacity: 0 })
			tl.from('.logo', { opacity: 0 }, '<')
			tl.from('.logo-bg', { opacity: 0 }, '<+0.25')
			tl.from(links, { opacity: 0, stagger: 0.25 }, '<+0.35')
		}

		tl.set('.hidden', { display: 'none' })
	})

	function testAnime() {
		if (!dev) return
		tl.play(0)
	}
</script>

<svelte:head>
	<noscript>
		<style>
			.hidden {
				display: none !important;
			}
		</style>
	</noscript>
</svelte:head>

<header class="wrap">
	<nav class="mainNav">
		<div
			class="logo"
			aria-label="Brent Morton Logo"
			on:click={testAnime}
			on:keypress={testAnime}
		>
			<b aria-hidden="true">Bren</b>

			<svg
				width="36"
				viewBox="0 0 130 130"
				aria-hidden="true"
				focusable="false"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28 51.9984H13V21.9984C13.0015 25.6099 7.73701 25.0063 4 24.9984V13.9984C13.9554 14.0058 11.4238 7.45308 12.9867 7C18.8419 7 22.1509 7.03377 28 7V51.9984Z"
					fill="white"
				/>
				<path
					d="M79 90C81.5 81 86.2187 70.1345 91.5 59.8315C97.3874 48.3165 103.662 39.0525 109.463 32.0395C111.281 29.7884 112.836 28.5195 115 28V124H130V7.10463H115C112.403 7.10463 103.618 13.8578 94.5276 27.3642C85.4368 40.784 78.829 52.2165 74.5 62C70.0845 52.1299 63.359 40.784 54.5279 27.624C45.3505 13.9444 39.684 7 37 7C37 19.1163 37 28 37 28C42.7142 34.9264 50.8916 48.2299 56.8655 59.8315C62.1469 70.0479 66.7966 80.3897 70 90C70.9524 92.9437 71 94 71.5 95C72 96 73 97 74.5 97C76 97 77 96 77.5147 95.0261C78.0571 94 78 93 79 90Z"
				/>
				<path d="M28 61H13V76H28V61Z" />
				<path d="M28 85H13V100H28V85Z" />
				<path d="M28 109H13V124H28V109Z" />
			</svg>

			<b aria-hidden="true">orton</b>
		</div>

		<a href="/projects">Projects</a>
		<a href="/contact">Contact</a>
		<a href="/about">About</a>
	</nav>

	<svg
		class="logo-bg"
		width="100%"
		height="100%"
		viewBox="0 0 125 117"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M24 44.9984H9V14.9984C9.00153 18.6099 3.73701 18.0063 0 17.9984V6.99838C9.95537 7.00583 7.42383 0.453084 8.98668 0C14.8419 0 18.1509 0.0337733 24 0V44.9984Z"
		/>
		<path
			d="M74 83C76.5 74 81.2187 63.1345 86.5 52.8315C92.3874 41.3165 98.6618 32.0525 104.463 25.0395C106.281 22.7884 107.836 21.5195 110 21V117H125V0.104633H110C107.403 0.104633 98.6185 6.85783 89.5276 20.3642C80.4368 33.784 73.829 45.2165 69.5 55C65.0845 45.1299 58.359 33.784 49.5279 20.624C40.3505 6.94441 34.684 0 32 0C32 12.1163 32 21 32 21C37.7142 27.9264 45.8916 41.2299 51.8655 52.8315C57.1469 63.0479 61.7966 73.3897 65 83C65.9524 85.9437 66 87 66.5 88C67 89 68 90 69.5 90C71 90 72 89 72.5147 88.0261C73.0571 87 73 86 74 83Z"
		/>
		<path d="M24 54H9V69H24V54Z" />
		<path d="M24 78H9V93H24V78Z" />
		<path d="M24 102H9V117H24V102Z" />
	</svg>
</header>
<div class="hidden" />

<style lang="scss">
	.hidden {
		position: absolute;
		display: grid;
		min-width: 100vw;
		min-height: 100vh;
		background-color: var(--clr-secondary-bg);
		z-index: 9999;
	}

	header {
		grid-row: 1 / -1;
		position: relative;
		display: grid;
		grid-template-areas: '. l .';
		overflow: hidden;
		z-index: 0;
		background: linear-gradient(
			180deg,
			var(--clr-primary-bg) 0%,
			var(--clr-secondary-bg) 100%
		);

		& > * {
			grid-area: l;
		}
	}

	.logo {
		--font-spacing: 1px;

		justify-self: center;
		max-height: 35px;
		display: grid;
		grid-auto-flow: column;
		font-size: var(--fs-5);
		letter-spacing: var(--font-spacing);
		transform-origin: center center;
		z-index: 999;

		& > :last-child {
			align-self: end;
		}

		b {
			line-height: 0.8;
		}

		svg {
			margin-inline-end: 0.15rem;
			fill: var(--clr-primary);
		}
	}

	nav {
		display: grid;
		gap: var(--gap-7);
		place-content: center;
	}

	a {
		justify-self: right;
		font-size: var(--fs-lrg);
		font-weight: bold;
		text-decoration: none;
		text-transform: uppercase;
	}

	.logo-bg {
		position: absolute;
		fill: var(--clr-secondary-bg);
		transform: scale(1.1) rotate(-20deg);
		// opacity: 50%;
		z-index: -999;
	}
</style>
