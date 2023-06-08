<script>
	import { skills } from '../../../utils/data';

	const HEIGHT = 50;
	const WIDTH = 50;
</script>

<ul class="skills">
	{#each skills as skill}
		<li class="skill">
			<h4>{skill.name}</h4>
			<img src={skill.logo} alt={skill.name} height={HEIGHT} width={WIDTH} />
		</li>
	{/each}
</ul>

<style>
	.skills {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
		list-style-type: none;
		padding: 1rem;
    row-gap: 2rem;
		margin: auto;
		width: 90svw;
		background-color: white;
		border-radius: 1rem;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
	}
	.skill {
		display: grid;
		justify-items: center;
	}

	h4 {
		margin-bottom: 0.5rem;
		margin-top: 0;
	}

	@media (min-width: 463px) {
		.skills {
			max-width: 510px;
    
		}
	}
</style>
