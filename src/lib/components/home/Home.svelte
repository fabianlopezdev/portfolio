<script>
	import { Button } from '$components';
	import scrollTo from '../../../utils/functions';
	export let language;
	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section>
	<h2>
		{language.slogan1} <span>{language.sloganSpan1} </span> {language.slogan2}
		<span>{language.sloganSpan2} </span> {language.slogan3}.
	</h2>
	<h1 style="color: var(--clr-secondary)">{language.welcome}</h1>
	<div style="display: flex; gap: 1em; flex-wrap:wrap;">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href={'#contact'} icon={'envelope'}
			>{language.buttonContact}</Button
		>
		<Button --color="var(--clr-font)" href={envResumeLink} icon={'download'}>{language.buttonResume}</Button>
	</div>
</section>

<style>
	section {
		/* margin-top: var(--size-header); */
		height: calc(100svh - var(--size-header)) ;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		gap: 2em;
	}
	h2 {
		font-size: clamp(2.5rem, 3.8vw ,3.4rem);
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

 
	@media (max-width: 544px) {
		section {
			gap: 0.5em;
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
