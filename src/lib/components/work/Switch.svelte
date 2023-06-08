<script>
	import { onMount } from 'svelte';
	export let selectedOption;
	export let switchLang;

	function handleRadioChange(event) {
		selectedOption = event.target.id;
	}

	onMount(() => {
		const toggleContainer = document.getElementById('toggleContainer');
		const projectLabel = document.querySelector('label[for="projects"]');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !projectLabel.classList.contains('animate')) {
						projectLabel.classList.add('animate');
					} else if (!entry.isIntersecting && projectLabel.classList.contains('animate')) {
						projectLabel.classList.remove('animate');
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(toggleContainer);
	});
</script>

<div class="toggle" id="toggleContainer">
	<input type="radio" id="projects" name="toggle" checked on:change={handleRadioChange} />
	<label for="projects" class:animate={selectedOption === 'projects'}>
		<span class="label-text">{switchLang.projects}</span>
	</label>
	<input type="radio" id="skills" name="toggle" on:change={handleRadioChange} />
	<label for="skills" class:animate={selectedOption === 'skills'}>
		<span class="label-text">{switchLang.skills}</span>
	</label>
	<span class="slider" />
</div>

<style>
	/* Hide the underline initially */
	div.toggle label span.label-text::after {
		transform: scaleX(0);
	}

	/* Apply the animation to the selected toggle label */
	div.toggle label.animate span.label-text::after {
		animation: animateUnderline 0.5s 1s;
	}

	@keyframes animateUnderline {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
	div.toggle {
		position: relative;
		display: flex;
		width: 17rem;
		height: 3.5rem;
		font-size: 15.8px;
		font-weight: 700;
		border-radius: 1rem;
		border: 1px solid black;
		background-color: #ddd;
		align-items: center;
		margin-block: 1rem;
	}

	div.toggle input {
		display: none;
	}

	div.toggle label {
		position: relative;
		padding: 10px 0px;
		cursor: pointer;
		color: #000;
		z-index: 1;
		transition: color 0.7s;
		border-radius: 1rem;
		flex: 0 0 50%;
		letter-spacing: 1px;
		text-align: center;
	}

	div.toggle span.label-text {
		position: relative;
		display: inline-block;
	}

	div.toggle span.label-text::after {
		content: '';
		position: absolute;
		bottom: -17%;
		left: 0;
		right: 0;
		height: 2px;
		background: blue;
		transition: transform 0.5s;
		transform: scaleX(0);
		transform-origin: center;
		border-radius: 1rem;
	}

	#projects:checked ~ label[for='projects'] .label-text::after,
	#skills:checked ~ label[for='skills'] .label-text::after {
		transform: scaleX(1);
	}

	#projects:checked ~ label[for='projects'],
	#skills:checked ~ label[for='skills'] {
		color: black;
	}
	.toggle input[type='radio']:not(:checked) + label {
		color: #888;
		background-color: #ddd;
		z-index: 0;
	}

	span.slider {
		position: absolute;
		background: white;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		transition: left 0.5s;
		border-radius: 1rem;
		color: blue;
		flex: 0 0 10%;
	}

	#projects:checked ~ .slider {
		border-right: 1px solid black;
	}

	#skills:checked ~ .slider {
		left: 50%;
		border-left: 1px solid black;
	}
</style>
