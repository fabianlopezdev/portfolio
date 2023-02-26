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
		margin: 0;
	}
	.header-container {
		height: 66px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 866px;
		text-align: center;
		margin: 0.7rem auto 0 auto;
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
	@media screen and (max-width: 570px) {
		.header-container {
			flex-direction: column;
			gap: 1rem;
			margin: 2rem;
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
</style>
