<script lang="ts">
	import { SelfImage } from '$components';
	export let aboutLang: Language['about'];
</script>

<section id="about">
	<h2>About me</h2>

	<div class="about-container">
		<div>
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
	.about-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
	}
</style>
