<script lang="ts">
	import { Nav, About, Projects, Contact, ToggleDark, SocialLinks } from '$components';
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import GithubIcon from 'svelte-icons/di/DiGithubBadge.svelte';

	const linkedInLink = 'https://www.linkedin.com/in/fabian-lopez-gonzalez/';
	const gitHubLink = 'https://github.com/Fabs-and';
	let isDark: boolean = false;

	$: activeClass = isDark ? 'dark' : 'light'
</script>


<header>
	<div class="container">
		<div class='rombhoid-container'>
			<div class='rombhoid'		
			>
		</div>
		<div class='rombhoid-letters'>Fabs<br> Codes</div>
	</div>
		<div class="both">
			<ToggleDark bind:isDark />
			<SocialLinks />
		</div>
	</div>
	<div class="nav">
		<Nav />
	</div>
</header>

<main >
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>
	.rombhoid {
		transform: skewX(-30deg);
		background-color: #016AA1; 
		color: white;
		padding: 2em;
		width: 60px;
		border-radius: 0.5em;
		box-shadow: 3px -3px 3px  #888888;
	}
	.rombhoid-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2em;
	}

	.rombhoid-letters {
		position: absolute;
		color: white;
		text-align: left;
		font-weight:500;
		font-size: 1.3em;
	}
	header {
		position: relative;
	}
	.container {
		height: 66px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 866px;
		text-align: center;
		margin: 2em auto 2em auto;
	}
	.both {
		display: flex;
		gap: 2em;
	}
	.nav {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	@media screen and (max-width:570px) {
		.container {
			flex-direction: column;
			gap: 1em;
			margin: 2em;
		}
		.nav {
			display:none;
		}
		.both {
			gap: 1em;
			justify-content: space-around;
			margin-left: 1em;
		}
	}
</style>
