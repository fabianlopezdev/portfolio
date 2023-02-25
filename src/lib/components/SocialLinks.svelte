<script>
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte'

	const linkedInLink = 'https://www.linkedin.com/in/fabian-lopez-gonzalez/';
	const gitHubLink = 'https://github.com/Fabs-and';
</script>

<a
	href={linkedInLink}
	title="Visit my LinkedIn profile"
	aria-label="Link to my LinkedIn profile"
	class="icons"
	target="_blank"
	rel="noopener noreferrer"><LinkedInIcon /></a
>
<a
	href={gitHubLink}
	title="Visit my GitHub profile"
	aria-label="Link to my GitHub profile"
	class="icons"
	target="_blank"
	rel="noopener noreferrer"><GitHubIcon /></a
>
