<script lang="ts">
	import { Button, SocialLinks } from '$components';
	import scrollTo from '../../../utils/functions';
	import type { Language } from '../../../types';

	export let homeLang: Language['home'];

	let envResumeLink = import.meta.env.VITE_RESUME_LINK;
</script>

<section id="home">
	<h2>
		fabs
	</h2>
	<h1>
		{homeLang.slogan1}
		<span>
			{homeLang.highlight1}
		</span>
		{homeLang.slogan2}
		<span>
			{homeLang.highlight2}.
		</span>
		<!-- {homeLang.slogan2} -->
	</h1>
	<div class='welcome-container'>
	<h2>{homeLang.welcome}</h2>
		
	</div>

	
	<div class="buttons">
		<Button --color="var(--clr-accent)" on:click={scrollTo} href='#contact' icon={'envelope'}
			>{homeLang.buttonContact}</Button
		>
		<Button --color="var(--clr-font)" href={envResumeLink} icon={'download'}
			>{homeLang.buttonResume}</Button
		>
	</div>
</section>

<style>
 h2 {

 }

	.welcome-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* gap:1rem; */
		/* color: var(--clr-accent) */
	}
	section {
		min-height: calc(100svh - 3.7rem);
		/* height: calc(100svh - var(--size-header)); */
		/* display: flex;
		flex-direction: column; */
		justify-content: center;
		align-items: center;
		/* font-size: 1.5rem; */
		text-align: center;
		gap: 5rem;
		padding: 2.5rem 0;
	}
	h1 {
		font-size: clamp(2.9rem, 6vw, 5rem);
		font-weight: 800;
		width: 75%;
		line-height: 1;
		margin: 0;
		padding: 0 0 1rem 0;
		/* color: gray; */
	}
	span {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: black;
		z-index: -1;

	}
	
	span:nth-child(1) {
		animation: color-white 0.8s linear forwards;
		animation-delay: 0.2s;
	}

	span:nth-child(2) {
		animation: color-white 0.9s linear forwards;
		animation-delay: 1.1s;
	}
span:nth-child(1)::before {
    content: '';
    position: absolute;
    width: 0;  /* Set initial width to 0 */
    height: 100%;
    top: 5px;
    left: -2px;
    z-index: -2;
    transform: rotate(-1deg);
    background-color: var(--clr-accent);
    animation: highlight 0.7s; 
		
    animation-fill-mode: forwards;  /* Keep the highlight after the animation */
}

span:nth-child(2)::before {
    content: '';
    position: absolute;
    width: 0;  /* Set initial width to 0 */
    height: 100%;
    top: 5px;
    left: -2px;
    z-index: -2;
    transform: rotate(-1deg);
    background-color: var(--clr-accent);
    animation: highlight 0.7s;
    animation-delay: 0.9s; /* Delay the second animation by 2 seconds */
    animation-fill-mode: forwards;  /* Keep the highlight after the animation */
}

@keyframes color-white {
  0% { color: black; }
  50% { color: gray; }
  100% { color: white; }
}
	@keyframes highlight {
    from { width: 0; }
    to { width: 100%; }
}
	
	h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: var(--clr-secondary);
		margin: 0;
		font-weight: 300;
	}

	.buttons {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
		justify-content: center;
		 margin-top: -1rem; 
	}

	@media (max-width: 544px) {
		section {
			gap: 3rem;
		}

		h1 {
			width: 80%;
			margin: 0 2rem;
		}

			h2 {
			margin: 0 2rem;
		}
		/* .buttons {
			gap: 0.5rem;
		} */
	}

	@media (max-height: 463px) {
		section {
			margin-top: 2rem;
			height: 100%;
		}

	}


</style>
