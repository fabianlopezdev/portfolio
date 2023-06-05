<script lang="ts">
	import { SelfImage } from '$components';
	export let aboutLang: Language['about'];
</script>

<section id="about-section">
	<h2 class="about-section__title">About<span style="color: blue;">.</span></h2>

	<article class="about-section__container">
		<div class="about-section__text">
			<p>{aboutLang.firstParagraph}</p>
			<p>{aboutLang.secondParagraph}</p>
			<p>{aboutLang.thirdParagraph}</p>
		</div>
		<aside class="about-section__image">
			<SelfImage />
		</aside>
		<div />
	</article>
</section>

<style>
	#about-section {
		text-align: center;
		max-width: 1000px;
	}
	.about-section__title {
		margin-bottom: 0;
	}
	.about-section__container {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: left;
		justify-self: center;
		align-self: center;
		margin: auto;
		margin-inline: 1rem;
	}

	.about-section__text {
		font-size: clamp(1.3rem, 1.4vw, 1.6rem);
		flex: 1;
		line-height: 1.6;
	}

	.about-section__image {
		width: 20rem;
		margin-bottom: 4rem;
		text-align: center;
	}

	@media (max-width: 800px) {
		.about-section__container {
			flex-direction: column-reverse;
		}
		.about-section__image {
			margin-bottom: 0;
		}
	}
</style>
