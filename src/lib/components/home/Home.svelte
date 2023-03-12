<script lang="ts">
	import { Button } from '$components';
	import scrollTo from '../../../utils/functions';
	import type { Language } from '../../../types';

	export let home: Language['home'];

	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section>
	<h2>
		{home.slogan1} <span>{home.sloganSpan1} </span>
		{home.slogan2}
		<span>{home.sloganSpan2} </span>
		{home.slogan3}.
	</h2>
	<h1>{home.welcome}</h1>
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
	section {
		height: calc(100svh - var(--size-header));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		gap: 2rem;
	}
	h2 {
		font-size: clamp(2.5rem, 3.8vw, 3.4rem);
		width: 75%;
		text-align: center;
		line-height: 1;
		margin: 0;
	}
	span {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: var(--clr-font-contrast);
	}

	span::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 90%;
		top: 5px;
		left: -2px;
		z-index: -1;
		transform: rotate(-1deg);
		background-color: var(--clr-accent);
	}

	h1 {
		color: var(--clr-secondary);
	}

	.buttons {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	@media (max-width: 544px) {
		section {
			gap: 0.5rem;
		}

		h1 {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
	}

	@media (max-height: 463px) {
		section {
			margin-top: 2rem;
			height: 100%;
		}
	}
</style>
