<script>
	import { page } from '$app/stores'
	import { projectsStore } from '$lib/data/projects.js'

	import Title from '$lib/component/Title.svelte'
	import VendorIcons from '$lib/component/VendorIcons.svelte'

	$: currentProject = $projectsStore[$page.params.slug]
	const lines = ['swoop-left', 'check', 'wiggly']
</script>

<div class="spacer" id="main-content" tabindex="-1">
	<Title>
		<h1 class="title-med">{currentProject.name}</h1>
		<i>{currentProject.subTitle}</i>

		<VendorIcons slot="icons" techUsed={currentProject.techUsed} />

		<div class="img-wrap" slot="thumbnails">
			<img
				src={currentProject.thumbnail}
				alt="Visual of the project"
				width="420px"
				height="380px"
				loading="lazy"
			/>

			<img
				src={currentProject.thumbnail2}
				alt="Visual of the project"
				width="420px"
				height="237px"
				loading="lazy"
			/>
		</div>
	</Title>

	<article class="wrap spacer">
		<header class="box-wrap">
			<h2 class="title-sml">{currentProject.overview.title}</h2>
			<a href={currentProject.link} class="box" aria-label="live demo">
				<svg width="28" height="28">
					<use href="/img/main-icons.svg#link" />
				</svg>
			</a>

			<a href={currentProject.repo} class="box" aria-label="github repo">
				<svg width="28" height="28">
					<use fill="unset" href="/img/social-icons.svg#github" />
				</svg>
			</a>
		</header>

		<div class="grid">
			<img
				src={currentProject.overview.img}
				alt={currentProject.overview.altText}
				width="420px"
				height="237px"
				loading="lazy"
			/>

			<div class="spacer">
				{@html currentProject.overview.content}
			</div>
		</div>
	</article>

	<article class="wrap spacer">
		<h2 class="title-sml">Highlight</h2>
		<ul>
			{#each currentProject.highlight as highlight, dex}
				<li><b>{highlight}</b><i>{dex + 1}</i></li>
			{/each}
		</ul>

		{#each currentProject.sections as section, dex}
			<section class="spacer" data-highlight={dex}>
				<h3>{section.title}</h3>

				<div class="highlight grid">
					<img
						src={section.img}
						alt={section.altText}
						loading="lazy"
						width="300px"
						height="300px"
					/>

					<svg class="line">
						<use href="/img/lines.svg#{lines[dex]}" />
					</svg>

					<!-- <svg
            use:triggerMe
            class="line"
            viewBox="0 0 276 73"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="swoop-left"
              d="M275 46.5022C204.463 82.5695 34.1618 86.5221 9.99999 5"
              stroke="#FFCB47"
              stroke-width="3"
              fill="none"
            />

            <path
              class="arrow"
              d="M15.0141 7.31104L6.00897 2.09131 M2 11.8101L6 2.09131"
              stroke="#FFCB47"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg> -->

					<!-- note @html to render the html content of the section -->
					<div class="content spacer">
						{@html section.content}
					</div>
				</div>
			</section>
		{/each}
	</article>

	<article class="wrap spacer">
		<h2 class="title-sml">{currentProject.learned.title}</h2>

		<div class="grid">
			<!-- <img src={currentProject.learned.img} alt={currentProject.learned.altText} /> -->
			<div class="spacer">
				{@html currentProject.learned.content}

				<p class="links">
					Check out the
					<a href={currentProject.repo}>code repo</a>
					or view the
					<a href={currentProject.link}>active demo</a>.
				</p>
			</div>
		</div>
	</article>
</div>

<style lang="scss">
	@use '../../../lib/scss/vars' as *;

	img {
		height: 100%;
		object-fit: cover;
		border-radius: 3px;
	}

	.img-wrap {
		// grid-area: img;
		justify-self: end;
		display: grid;
		align-items: center;
		grid-template-areas: 'l';

		img {
			grid-area: l;
			max-height: 400px;
			box-shadow: var(--shadow-5);
		}

		img:last-child {
			height: auto;
			transform: translateX(-70px) scale(0.75);
		}

		@media (min-width: $mediaSml) {
			img:first-child {
				transform: rotate(13deg);
			}
		}
	}

	.box-wrap {
		display: inline-flex;
		gap: 0.5rem;
	}

	.box {
		--fill: var(--clr-highlight);
		padding: 4px;
		display: grid;
		place-content: center;
		color: var(--clr-secondary-bg);
		background: var(--clr-secondary-bg);
		border: 2px solid var(--clr-highlight);
		border-radius: 3px;

		&:hover {
			--fill: currentColor;
			background: var(--clr-highlight);
		}
	}

	article,
	section {
		& > * {
			--spacer: var(--spacer-5);
		}
	}

	section {
		--spacer: var(--spacer-9);
	}

	article {
		ul {
			padding: 0;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: var(--gap-5);
		}

		li {
			display: grid;
			grid-template-areas: 'l';
			place-items: center;

			& > * {
				grid-area: l;
			}

			b {
				align-self: end;
				text-transform: lowercase;
				// color: var(--clr-highlight);
				transform: translate(0, -5px);
				z-index: 9;
			}

			i {
				max-width: max-content;
				padding-block: 0.1em;
				padding-inline: 0.35em;
				color: var(--clr-primary-bg);
				font-size: var(--fs-lrg);
				font-weight: var(--fw-7);
				background-color: var(--clr-secondary-bg);
				border-radius: 3px;
			}
		}
	}

	h2 {
		max-width: max-content;
		padding-block: 0.25rem;
		padding-inline: 0.5rem;
		color: var(--clr-secondary-bg);
		background: var(--clr-highlight);
		border-radius: 3px;
	}

	h3 {
		text-decoration-line: underline;
		text-decoration-color: var(--clr-highlight);
		text-decoration-thickness: 0.1em;
		text-underline-offset: 0.05em;
	}

	i {
		display: block;
	}

	.grid {
		display: grid;
		gap: var(--gap-5);

		@media (min-width: $mediaSml) {
			grid-template-columns: 3fr 2fr;
		}
	}

	.line {
		display: none;
	}

	@media (min-width: $mediaSml) {
		.highlight {
			grid-template-columns: 4fr 1fr auto;
			grid-template-areas:
				'content . img'
				'line line img';

			img {
				grid-area: img;
			}
		}

		.line {
			--fill: var(--clr-highlight);
			grid-area: line;
			justify-self: end;
			align-self: start;
			width: 55%;
			height: 75px;
			display: block;
			// transform: translate(120px);
		}

		.content {
			grid-area: content;
		}

		[data-highlight='1'] {
			.grid {
				grid-template-columns: auto 1fr 5fr;
				grid-template-areas:
					'img . content'
					'img line line';
			}

			.line {
				place-self: start;
			}
		}
	}
</style>
