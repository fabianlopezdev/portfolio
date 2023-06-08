<script lang="ts">
	import { SocialLinks, Logo } from '$components';
	export let footerLang: Language['footer'];
	import HeartIcon from 'svelte-icons/io/IoMdHeart.svelte';
	import type { Language } from '../../../types';

	const currentYear = new Date().getFullYear();
</script>

<nav class="footer desktop">
	<div class='wrapper'>

		<div class="logo-and-copyright">
			<!-- fontSize value is in rem -->
			<Logo fontSize={2} />
			
			<small>©{currentYear} FabulousApps</small>
		</div>
		<!-- <small class="madewith-container">
			{footerLang.madeWith}
			<div class="icons">
				<HeartIcon />
		</div>
		<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
			{footerLang.language}
		</a>
	</small> -->
	<SocialLinks gap={0.5}/>
</div>
</nav>

<nav class="footer mobile">
	<div class='wrapper'>

		<div class="logo-and-copyright">
			<!-- fontSize value is in rem -->
			<Logo fontSize={2} />
			<small>
				
				©{currentYear} FabulousApps</small>
	</div>
	<div class="social-and-svelte">
		<div class="social">
			<SocialLinks gap={0.5} />
		</div>
		<!-- <small class="madewith-mobile-container">
			{footerLang.madeWith}
			<div class="icons">
				<HeartIcon />
			</div>
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				{footerLang.language}
			</a>
		</small> -->
	</div>
</div>
</nav>

<style>
	a:hover {
		text-decoration: underline;
	}
	
	.footer {
		border-top: 0.5px solid var(--clr-shadow);
		width: 100vw;
		display: flex;
		justify-content: center;
	}
	
	.wrapper {
		width: clamp(375px, 1000px, 1000px);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-header);
		padding: 0.5rem 1rem;
		
	}
	
	.logo-and-copyright {
		display: flex;
		flex-direction: column;
	}

	.icons {
		color: #ff3e00;
		cursor: default;
		width: 1.5rem;
		height: 1rem;
	}

	.madewith-container {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
	}

	@media (min-width: 545px) {
		.mobile {
			display: none;
		}
	}

	@media (max-width: 544px) {
		.desktop {
			display: none;
		}

		.footer {
			padding-bottom: 1rem;
		}

		.social-and-svelte {
			display: flex;
			flex-direction: column;
			align-self: flex-end;
		}
		.social {
			align-self: flex-end;
		}
		.madewith-mobile-container {
			display: flex;
		}
	}
</style>
