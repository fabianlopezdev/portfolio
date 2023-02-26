<script>
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';

	const envLinkedInLink = import.meta.env.VITE_LINKEDIN_LINK;
	const envGitHubLink = import.meta.env.VITE_GITHUB_LINK;
</script>

<div class="icons">
	<a
		href={envLinkedInLink}
		style="color: #016AA1"
		aria-label="Link to my LinkedIn profile"
		target="_blank"
		rel="noopener noreferrer"><LinkedInIcon /></a
	>
	<a
		style="color:#016AA1"
		href={envGitHubLink}
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
