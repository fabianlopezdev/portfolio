<script>
	import { Nav, About, Projects, Contact, ToggleDark, SocialLinks, Logo, Home } from '$components';
</script>

<header>
	<div class="header-container">
		<Logo />
		<div class="toggle-and-socialLinks">
			<ToggleDark />
			<SocialLinks />
		</div>
	</div>
	<div class="not-in-header-container">
		<Nav />
	</div>
</header>

<main >
	<Home />
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>
	header {
		position: relative;
		margin: 0;

	}
	.header-container {
		height: var(--size-header);
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 866px;
		text-align: center;
		margin: 0.7rem auto 0.7rem auto;
	}
	.toggle-and-socialLinks {
		display: flex;
		gap: 2rem;
	}
	.not-in-header-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	main {
			/* margin-top: calc(var(--size-header)); */
		}
	@media screen and (max-width: 604px) {
		.header-container {
			flex-direction: column;
			gap: 0.5rem;
			margin: 1.5rem;
			--size-header: 6rem;
			height: var(--size-header);
		}
		.not-in-header-container {
			display: none;
		}

		.toggle-and-socialLinks {
			gap: 1rem;
			justify-content: space-around;
			margin-left: 1rem;
		}
		

		
	}
	@media screen and (max-height: 626px) {
		main {
						margin-top: var(--size-header);

		}
		
	}	
		@media screen and (max-height: 412px) {
		main {
						margin-top: calc(var(--size-header) + 5rem);

		}
	}
</style>
