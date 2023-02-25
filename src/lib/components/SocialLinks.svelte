<script>
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';

	const linkedInLink = 'https://www.linkedin.com/in/fabian-lopez-gonzalez/';
	const gitHubLink = 'https://github.com/Fabs-and';
</script>

<div class="icons">
	<a
		href={linkedInLink}
		style="color: #016AA1"
		title="Visit my LinkedIn profile"
		aria-label="Link to my LinkedIn profile"
		target="_blank"
		rel="noopener noreferrer"><LinkedInIcon /></a
	>
	<a
		style="color:#016AA1"
		href={gitHubLink}
		title="Visit my GitHub profile"
		aria-label="Link to my GitHub profile"
		target="_blank"
		rel="noopener noreferrer"><GitHubIcon /></a
	>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		width: 5em;
		gap: 1em;
	}
</style>
