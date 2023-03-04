<slot />

<style>
	:root {
		--clr-bg: #f9fcfd;
		--clr-accent: blue;
		--clr-secondary: #016aa1;
		--clr-font: black;
		--clr-font-contrast: white;
		--clr-toggle: gray;
		--size-header: 5rem;
	}

	:global(body) {
		background-color: var(--clr-bg);
		font-family: system-ui;
		color: var(--clr-font);
	}

	:global(section) {
		height: 100vh;
		height: 100svh;
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		text-decoration: none;
		color: var(--clr-font);
	}

	:global(.icons) {
		background: none;
		color: var(--clr-toggle);
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		width: 1.5em;
		height: 1.5em;
	}

	:global(.dark) {
		--clr-bg: black;
		--clr-secondary: #016aa1;
		--clr-font: white;
		--clr-font-contrast: rgb(148, 146, 146);
		--clr-toggle: rgb(149, 149, 66);
	}
</style>
