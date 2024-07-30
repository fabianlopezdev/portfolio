<script lang="ts">
	// Importing necessary components and types
	import { Button } from '$components';
	import scrollTo from '../../../utils/functions';
	import type { Language } from '../../../types';
	import ScrollLine from './ScrollLine.svelte';
	// Setting the language variable
	export let homeLang: Language['home'];

	// Setting the resume link variable
	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section id="home">

	<h2>
		{homeLang.slogan1}
		<span>
			{homeLang.highlight1}
		</span>
		{homeLang.slogan2}
		<span>
			{homeLang.highlight2}.
		</span>
	</h2>

	<h1>{homeLang.welcome}</h1>

	<div class="buttons">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href="#contact" icon={'envelope'}>
			{homeLang.buttonContact}
		</Button>
		<Button --color="var(--clr-font)" href={envResumeLink} icon={'download'}>
			{homeLang.buttonResume}
		</Button>
	</div>
	<ScrollLine/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		min-height: calc(100svh - 3.7rem);
		max-width: 1000px;
		text-align: center;
	}

	h2 {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
		margin-inline: 1rem;
		font-size: clamp(3.4rem, 13vw, 100px);
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.2rem;
	}

	h1 {
		color: var(--clr-secondary);
		margin-top: 3rem;
		margin-inline: 1rem;
		font-size: clamp(2rem, 4vw, 2.5rem);
		font-weight: 400;
		line-height: 2rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1em;
		flex-wrap: wrap;
		margin-bottom: 4rem;
	}

	span {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font);
		z-index: -1;
	}

	span:nth-child(1) {
		animation: color-white 0.8s linear forwards;
		animation-delay: 0.2s;
	}

	span:nth-child(2) {
		animation: color-white 0.8s linear forwards;
		animation-delay: 0.5s;
	}
	span:nth-child(1)::before {
		content: '';
		position: absolute;
		width: 0; /* Set initial width to 0 */
		height: 100%;
		top: 5px;
		left: -2px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
		animation: highlight 0.4s;

		animation-fill-mode: forwards; /* Keep the highlight after the animation */
	}

	span:nth-child(2)::before {
		content: '';
		position: absolute;
		width: 0; /* Set initial width to 0 */
		height: 100%;
		top: 5px;
		left: -2px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
		animation: highlight 0.4s;
		animation-delay: 0.5s; /* Delay the second animation by 2 seconds */
		animation-fill-mode: forwards; /* Keep the highlight after the animation */
	}

	@keyframes color-white {
		0% {
			color: var(--clr-font);
		}
		50% {
			color: gray;
		}
		100% {
			color: white;
		}
	}
	@keyframes highlight {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@media (max-width: 648px) {
		.buttons {
			margin-bottom: 2rem;
		}
	}

</style>
