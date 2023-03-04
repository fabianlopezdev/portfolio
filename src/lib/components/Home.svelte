<script>
	import { Button } from '$components';
	import scrollTo from '../../utils/functions';
	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section>
	<h2>
		Transforming your web vision into a <span>stunning</span> and
		<span>functional</span> reality.
	</h2>
	<h1 style="color: var(--clr-secondary)">Hello, I am Fabian!</h1>
	<div style="display: flex; gap: 1em; flex-wrap:wrap;">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href={'#contact'} icon={'envelope'}
			>Contact Me</Button
		>
		<Button --color="var(--clr-font)" href={envResumeLink} icon={'download'}>Resume</Button>
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
		top: 10px;
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
</style>
