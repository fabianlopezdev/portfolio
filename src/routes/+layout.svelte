<slot />
<script>
  let title = 'fab. Apps';
  let description = 'Fabian Lopez Gonzalez Portfolio';
  let image = `$static + '/portfolio-favicon1.png'`;
  let url = 'https://portfolio-fabs-and.vercel.app/';
</script>

<svelte:head>
  {@html `<meta property="og:title" content="${title}" />`}
  {@html `<meta property="og:description" content="${description}" />`}
  {@html `<meta property="og:image" content="${image}" />`}
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
		--clr-toggle: gray;
		--clr-hover: #e2e8ec;
		--clr-shadow: #0000001a;
		--size-header: 3rem;
		/* overflow-x: hidden; */
	}

/*To make the width to fit the entire screen*/	
	:global(*) { 
		box-sizing: border-box;
}
	:global(.dark) {
		--clr-bg: #000020;
		--clr-bg-items: #D0DFF0;
		--clr-font: #D0DFF0;
		--clr-font-contrast-black-bg: var(--clr-accent);
		--clr-shadow: #202040;
		--clr-accent: #007BFF;
		--clr-hover: #202040;
	}

	:global(html) {
		scroll-padding-top:3.7rem;
		width: 100%;
	}
	:global(body) {
		background-color: var(--clr-bg);
		font-family: system-ui;
		color: var(--clr-font);
		margin: 0;
		min-width: 100%;
	}
	

	:global(section) {
		box-sizing: border-box;
		min-height: calc(100svh - 3.7rem);
		display: flex;
		flex-direction: column;
	}

	:global(.waves) {
		background: red;

  --mask:
    radial-gradient(63.09px at 50% 85.50px,#000 99%,#0000 101%) calc(50% - 60px) 0/120px 51% repeat-x,
    radial-gradient(63.09px at 50% -55.5px,#0000 99%,#000 101%) 50% 30px/120px calc(51% - 30px) repeat-x,
    radial-gradient(63.09px at 50% calc(100% - 85.50px),#000 99%,#0000 101%) calc(50% - 60px) 100%/120px 51% repeat-x,
    radial-gradient(63.09px at 50% calc(100% + 55.50px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px calc(51% - 30px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
	
	:global(a) {
		text-decoration: none;
		color: var(--clr-font);
	}

	:global(.header-icons) {
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		color: var(--clr-toggle);
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.3rem;
	}

	:global(.header-icons:hover) {
		background-color: var(--clr-hover);
		border-radius: 6px;
		/* color: black; */
		transition: color 0.3s ease, background-color 0.3s ease;
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
		/* background: none; */
		color: var(--clr-toggle);
		/* border: none; */
		padding: 0;
		/* font: inherit; */
		cursor: pointer;
		/* outline: inherit; */
		width: 1.5rem;
		height: 1.5rem;
	}

	


</style>
