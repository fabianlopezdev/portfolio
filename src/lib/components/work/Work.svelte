<script>
	import { Switch, ProjectsLogos } from '$components';
	let selectedOption = 'projects';
	let selectedLogo = 'wannago';
</script>

<section id="work">
	<h2>
		Work<span style="color: blue">.</span>
	</h2>
	<Switch bind:selectedOption={selectedOption}/>
	<div class='projects-container'>
		{#if selectedOption === 'projects'}
			<ProjectsLogos bind:selectedLogo={selectedLogo}/>
		{/if}
	</div>
	<div class='skills-container'>
		{#if selectedOption === 'skills'}
			This is skills
		{/if}
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		align-items: center;
		gap: 1rem;
	}
</style>
