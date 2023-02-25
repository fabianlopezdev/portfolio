<script>
	import { Nav, About, Projects, Contact, ToggleDark, SocialLinks } from '$components';
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import GithubIcon from 'svelte-icons/di/DiGithubBadge.svelte';

	const linkedInLink = 'https://www.linkedin.com/in/fabian-lopez-gonzalez/';
	const gitHubLink = 'https://github.com/Fabs-and';
</script>

<header>
	<h3 title='Fabian Lopez - Personal Portfolio Website'>FabsCode</h3>
	<Nav />
	<ToggleDark />
	<SocialLinks/>
</header>

<main>
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>
	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 2em;
	}
</style>
