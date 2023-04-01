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
			<h2 class="title-med">{currentProject.overview.title}</h2>
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
		<h2 class="title-med">Highlights</h2>

		{#each currentProject.sections as section, dex}
			<section class="spacer" data-highlight={dex}>
				<h3>{section.title}</h3>
				<i>{dex + 1}</i>

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
					<p class="content spacer">
						{@html section.content}
					</p>
				</div>
			</section>
		{/each}
	</article>

	<article class="wrap spacer">
		<h2 class="title-med">{currentProject.learned.title}</h2>

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
		align-items: center;
	}

	.box {
		--fill: var(--clr-primary);
		width: 44px;
		height: 44px;
		display: grid;
		place-content: center;
		color: var(--clr-secondary-bg);
		background: var(--clr-secondary-bg);
		border: 2px solid var(--clr-primary);
		border-radius: 3px;

		&:hover {
			--fill: currentColor;
			background: var(--clr-primary);
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

	h2 {
		max-width: max-content;
		padding-block: 0.05rem;
		padding-inline: 0.5rem;
		border-left: 3px solid var(--clr-highlight);
	}

	h3 {
		text-decoration-line: underline;
		text-decoration-color: var(--clr-highlight);
		text-decoration-thickness: 0.1em;
	}

	.grid {
		display: grid;
		gap: var(--gap-5);

		@media (min-width: $mediaSml) {
			grid-template-columns: 3fr 2fr;
		}
	}

	.line,
	section > i {
		display: none;
	}

	@media (min-width: $mediaSml) {
		section {
			position: relative;

			i {
				position: absolute;
				max-width: max-content;
				padding-block: 0.1em;
				padding-inline: 0.35em;
				display: block;
				color: var(--clr-primary-bg);
				font-size: var(--fs-lrg);
				font-weight: var(--fw-7);
				background-color: var(--clr-secondary-bg);
				border-radius: 3px;
				transform: translate(-20px, -7rem);
				z-index: -1;
			}
		}
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
			h3 {
				text-align: right;
			}

			i {
				right: 0.75rem;
			}

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
