<script>
	import SocialIcons from './SocialIcons.svelte'

	const icons = [
		{
			name: 'bluesky',
			url: 'bsky.app/profile/b.1mind.dev',
		},
		{
			name: 'twitch',
			url: 'twitch.tv/b1mind/',
		},
		{
			name: 'github',
			url: 'github.com/b1mind/',
		},
		{
			name: 'codepen',
			url: 'codepen.io/b1mind/',
		},
		{
			name: 'linkedIn',
			url: 'linkedin.com/in/b1mind',
		},
	]
</script>

<footer class="container">
	<nav class="social" aria-label="social links">
		<ul>
			{#each icons as icon}
				<li>
					<SocialIcons name={icon.name} url={icon.url} />
				</li>
			{/each}
		</ul>
	</nav>

	<div class="webring">
		<b>CS.Sjoy.lol webring: </b>
		<a href="https://webri.ng/webring/cssjoy/previous?via=https://b.1mind.dev"
			>Previous</a
		>
		<b>-</b>
		<a href="https://webri.ng/webring/cssjoy/random?via=https://b.1mind.dev">Random</a>
		<b>-</b>
		<a href="https://webri.ng/webring/cssjoy/next?via=https://b.1mind.dev">Next</a>
	</div>
</footer>

<style lang="scss">
	@use '../scss/vars' as *;
	footer {
		margin-top: var(--spacer-9);
	}

	ul {
		padding: var(--gap-6) 0;
		display: grid;
		grid-auto-flow: column;
		place-content: center;
		gap: 2rem;
		list-style: none;
	}

	.webring {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5em;
		margin-inline: 0.25em;
		padding-block-end: 0.75em;
		& > :first-child {
			@media (max-width: 600px) {
				width: 100%;
				text-align: center;
			}
		}
	}
</style>
