<script lang="ts">
	import { SocialLinks, Logo } from '$components';
	export let footerLang: Language['footer'];
	import IoMdHeart from 'svelte-icons/io/IoMdHeart.svelte';
	import type { Language } from '../../../types';

	const currentYear = new Date().getFullYear();
</script>

<nav class="footer">
	<div class="desktop-screen">
		<div class="logo-copyright">
 

        <!-- fontSize value is in rem -->
         <Logo fontSize={2}/>
   
			©{currentYear} Fabulous Apps
		</div>
		<div class="icons-container">
			{footerLang.madeWith}
			<div class="icons">
				<IoMdHeart />
			</div>
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				{footerLang.language}
			</a>
		</div>
		<SocialLinks />
	</div>

	<div class="small-screen">
		<div class="logo-svelte-container">
			<div class="logo-copyright">
        <!-- fontSize value is in rem -->
				<Logo fontSize={2}/>
				©{currentYear} Fabulous Apps
			</div>
			<div class="social-and-svelte">
				<div class="social">
					<SocialLinks />
				</div>
				<div class="icons-container">
					{footerLang.madeWith}
					<div class="icons">
						<IoMdHeart />
					</div>
					<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
						{footerLang.language}
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
  
	.desktop-screen {
		position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-header);
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
	}
	.logo-copyright {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
    /* margin:0; */
	}
	.small-screen {
		display: none;
	}
	
	.footer {
		position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-header);
		width: clamp(375px, 100vw, 866px);
		margin: 0.4rem 0.5rem 0.3rem 0.8rem;
	}

	.icons {
		color: #ff3e00;
	}

	a:hover {
		text-decoration: underline;
	}

	.icons {
		width: 1rem;
		height: 1rem;
	}
	@media (max-width: 544px) {
		.desktop-screen {
			display: none;
		}
		.small-screen {
			display: block;
		}

		.logo-svelte-container {
			display: flex;
			width: clamp(375px, 100vw, 866px);
			justify-content: space-between;
			padding: 0rem 1rem;
			padding-bottom: 1rem;
		}

		.social-and-svelte {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.social {
			align-self: flex-end;
		}
	}
</style>
