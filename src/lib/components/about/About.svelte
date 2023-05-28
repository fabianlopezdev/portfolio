<script lang="ts">
	import { SelfImage } from '$components';
	export let aboutLang: Language['about'];
</script>

<section id="about">
	<h2>About me<span style="color: blue;">.</span></h2>
	<div class="about-container">
		<div class="text">
			<p>
				{aboutLang.firstParagraph}
				<br>
				<br>
				{aboutLang.secondParagraph}
				<br>
				<br>
				{aboutLang.thirdParagraph}
			</p>
			<p>
			</p>
		</div>
<div class='test'>

	<SelfImage />
</div>
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
		/* width: clamp(375px, 100vw, 1600px); */
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap-reverse;
	}

	.text {
	 width: clamp(350px, 50vw, 900px);
	 /* flex: 30; */
		font-size: 1.3rem;
		line-height: 1.6;
	}
	.test {
		/* flex:70; */
	}

	
	
	@media (max-width: 765px) {
		.text {
			width: clamp(350px, 100vw, 700px);
			padding: 0 1.5rem 0 1.5rem;
			/* width: clamp(450px, 100svw, 700px); */
		}
	}
</style>
