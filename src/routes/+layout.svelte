<script>
	//This three lines are for vercek analytics of the website
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<style>
	:root {
		--clr-bg: #f9fcfd;
		--clr-bg-items: white;
		--clr-accent: #1863e5;
		--clr-secondary: #016aa1;
		--clr-font: #4a5469;
		--clr-font-logo: #016aa1;
		--clr-font-projectCard: var(--clr-font);
		--clr-bg-projectCard: white;
		--clr-font-contrast: white;
		--clr-font-contrast-black-bg: white;
		--clr-icons: gray;
		--clr-hover: #e2e8ec;
		--clr-shadow: #0000001a;
		--height-header: 3rem;
	}

	:global(.dark) {
		--clr-bg: #000020;
		--clr-bg-items: #d0dff0;
		--clr-font: #d0dff0;
		--clr-font-contrast-black-bg: var(--clr-accent);
		--clr-font-projectCard: #016aa1;
		--clr-bg-projectCard: #016aa1;
		--clr-shadow: #202040;
		--clr-accent: #007bff;
		--clr-hover: #202040;
		/* transition: background 10s; */
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
		transition: background-color 0.5s, color 0.5s;
	}

	:global(section) {
		/* min-height: 100vh;
		min-height: 100svh; */
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
	:global(h1, h2) {
		font-size: 2rem;
		letter-spacing: -0.1rem;
	}
	:global(.g-button) {
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
		color: var(--clr-font);
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

	:global(.close-modal-btn) {
		position: absolute;
		top: 0;
		right: 0;
		padding-top: 1rem;
		padding-right: 1rem;
		background-color: var(--color);
		border: none;
	}

	:global(.skills-container) {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		gap: 0.5rem;
		padding: 0;
		font-size: 0.8rem;
		margin: 0;
	}

	:global(.skills-container li) {
		padding: 0.4rem;
		background-color: #d0dff0;
		color: #016aa1;
		border-radius: 5px;
		/* margin-right: 7px; */
		/* margin-bottom: 7px; */
		font-weight: 500;
	}

	/* Animations on Scroll*/

	:global(#animatedDot) {
		opacity: 0;
		transition: opacity 1s 0.5s; /* duration and delay */
	}

	:global(#animatedDot1) {
		opacity: 0;
		transition: opacity 1s 0.5s; /* duration and delay */
	}

	:global(#animatedDot.animate) {
		opacity: 1;
	}

	:global(#animatedDot1.animate) {
		opacity: 1;
	}
</style>
