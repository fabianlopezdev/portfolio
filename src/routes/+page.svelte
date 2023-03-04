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

<main>
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
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}
	.header-container {
		height: var(--size-header);
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;
		width: clamp(375px, (100vw - 40px), 866px); 
	}
	.toggle-and-socialLinks {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.not-in-header-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	 @media (max-width: 658px) {
			.not-in-header-container {
				display: none;
			}
			.toggle-and-socialLinks {
				gap: 1rem;
				justify-content: space-around;
				margin-left: 1rem;
			}
		}

</style>
