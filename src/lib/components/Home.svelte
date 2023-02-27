<script>
	import { Button } from '$components';
	import scrollTo from '../../utils/functions';
	let envResumeLink = import.meta.env.VITE_RESUME_LINK

</script>

<section>
	<h2>
		Transforming your web vision into a <span>stunning</span> and
		<span>functional</span> reality.
	</h2>
	<h1 style="color: var(--clr-secondary)">Hello, I am Fabian!</h1>
	<div style="display: flex; gap: 1em;">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href={'#contact'} icon={'envelope'}
			>Contact Me</Button
		>
		<Button
			--color="var(--clr-font)"
			href={envResumeLink}
			icon={'download'}>Resume</Button
		>
	</div>
</section>

<style>
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

	section {
		margin-top: var(--size-header);
		height: 100vh;
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		margin: 0 0 0 0;
		gap: 2em;
	}
	h2 {
		font-size: 3.8rem;
		max-width: 800px;
		text-align: center;
		line-height: 1;
		margin: 0 0 0 0;
	}
	@media screen and (max-width: 668px) {
		h2 {
			font-size: 2.5rem;
		}
	}

	@media screen and (max-height: 668px) {
		section {
			gap: 1em;
		}
		h2 {
			font-size: 2.5rem;
		}
	}
</style>
