<script>
	let title = 'Fabulous Apps';
	let description = 'Fabian Lopez Portfolio';
	let image = `https://portfolio-fabs-and.vercel.app/meta-image.png`;
	let url = 'https://portfolio-fabs-and.vercel.app/';
</script>

<slot />

<svelte:head>
	{@html `<meta property="og:title" content="${title}" />`}
	{@html `<meta property="og:description" content="${description}" />`}
	{@html `<meta property="og:image" itemprop="image" content="${image}" />`}
	{@html `<meta property="og:url" content="${url}" />`}
	{@html `<meta name="twitter:card" content="summary_large_image" />`}
</svelte:head>

<style>
	:root {
		--clr-bg: #f9fcfd;
		--clr-bg-items: white;
		--clr-accent: blue;
		--clr-secondary: #016aa1;
		--clr-font: black;
		--clr-font-contrast: white;
		--clr-font-contrast-black-bg: white;
		--clr-icons: gray;
		--clr-hover: #e2e8ec;
		--clr-shadow: #0000001a;
		--height-header: 3rem;
	}

	:global(.dark-mode) {
		--clr-bg: #000020;
		--clr-bg-items: #d0dff0;
		--clr-font: #d0dff0;
		--clr-font-contrast-black-bg: var(--clr-accent);
		--clr-shadow: #202040;
		--clr-accent: #007bff;
		--clr-hover: #202040;
	}

	/*To make the width to fit the entire screen in smaller screens*/
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-padding-top: 3.7rem;
	}

	:global(body) {
		background-color: var(--clr-bg);
		font-family: system-ui;
		color: var(--clr-font);
		margin: 0;
	}

	:global(section) {
		min-height: calc(100svh - 3.7rem);
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		text-decoration: none;
		color: var(--clr-font);
	}

	:global(img) {
		max-width: 100%;
		display: block;
	}

	:global(.button) {
		display: flex;
		justify-content: center;
		color: var(--clr-font-contrast);
		text-decoration: none;
		max-width: 215px;
		width: 15rem;
		padding: 1rem;
		border-radius: 1rem;
		font-size: 15.8px;
		font-weight: 700;
		color: var(--clr-font-contrast);
		background-color: var(--color);
		gap: 1rem;
		cursor: pointer;
	}

	:global(.icons) {
		color: var(--clr-icons);
		padding: 0;
		cursor: pointer;
		width: 1.5rem;
		height: 1.5rem;
	}

	:global(.header-icons) {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.3rem;
	}

	:global(.header-icons:hover) {
		background-color: var(--clr-hover);
		border-radius: 6px;
		transition: color 0.3s ease, background-color 0.3s ease;
	}

	:global(.icons-container) {
		display: flex;
		align-items: center;
		/* height: inherit; */
		gap: 0.5rem;
		margin: 0;
		padding: 0;
	}
</style>
