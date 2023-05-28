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
	{#if selectedOption === 'projects'}
	<div class='projects-container'  class:active={selectedOption === 'projects'}>
			<ProjectsLogos bind:selectedLogo={selectedLogo}/>
		</div>
		{/if}
	{#if selectedOption === 'skills'}
	<div class='skills-container' class:active={selectedOption === 'skills'}>
			This is skills
		</div>
		{/if}
</section>

<style>
	section {
		min-height: 100vh;
		align-items: center;
		gap: 1rem;
	}

	
</style>
