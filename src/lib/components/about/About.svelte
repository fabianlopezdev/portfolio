<script lang="ts">
	import { SelfImage } from '$components';
	export let aboutLang: Language['about'];
</script>

<section id="about">
	<div class="about-container">
		<div class="text">
			<h2>About me</h2>
			<p>
				{aboutLang.firstParagraph}
			</p>
			<p>
				{aboutLang.secondParagraph}
			</p>
		</div>

		<SelfImage />
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.about-container {
		width: clamp(375px, 100vw, 1600px);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap-reverse;
	}

	.text {
	 width: clamp(600px, 50vw, 900px);
		/* margin-inline: 1rem; */
	}

	
	
	@media (max-width: 789px) {
		.text {
			margin-inline: 2rem;
			/* width: clamp(450px, 100svw, 700px); */
		}
	}
</style>
