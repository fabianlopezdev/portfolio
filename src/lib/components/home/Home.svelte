<script lang="ts">
	import { Button, SocialLinks } from '$components';
	import scrollTo from '../../../utils/functions';
	import type { Language } from '../../../types';

	export let home: Language['home'];

	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section id="home">
	<div class='welcome-container'>
	<h1>{home.welcome}</h1>
		
	</div>
	<h2>
		{home.slogan1}
		<span>
			{home.highlight1}
		</span>
		{home.slogan2}
		<span>
			{home.highlight2}
		</span>.
		<!-- {home.slogan2} -->
	</h2>
	
	<div class="buttons">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href={'#contact'} icon={'envelope'}
			>{home.buttonContact}</Button
		>
		<Button --color="var(--clr-font)" href={envResumeLink} icon={'download'}
			>{home.buttonResume}</Button
		>
	</div>
</section>

<style>
	.welcome-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap:1rem;
		/* color: var(--clr-accent) */
	}
	section {
		/* height: calc(100svh - var(--size-header)); */
		/* display: flex;
		flex-direction: column; */
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		text-align: center;
		gap: 5rem;
		padding: 2.5rem 0;
	}
	h2 {
		font-size: clamp(2.9rem, 6vw, 5rem);
		font-weight: 800;
		width: 75%;
		line-height: 1;
		margin: 0;
		padding: 0 0 2.5rem 0;
		/* color: gray; */
	}
	span {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font-contrast);
		z-index: -1;
	}
	
	span::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 5px;
		left: -2px;
		z-index: -2;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
	}
	
	h1 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: var(--clr-secondary);
		margin: 0;
	}

	.buttons {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	@media (max-width: 544px) {
		section {
			gap: 3rem;
		}

		h1 {
			margin: 0 2rem;
		}
		.buttons {
			gap: 0.5rem;
		}
	}

	@media (max-height: 463px) {
		section {
			margin-top: 2rem;
			height: 100%;
		}

	}
</style>
