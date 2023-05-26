<script>
	import { SelfImage } from '$components';
	export let scrollY;

	let aboutYstart;
	let aboutYend;
	let yStart;
	let yEnd;
	let previousY = 0;
	let isScrollingDown = null;
	$: {
		if (aboutYstart) {
			yStart= aboutYstart.offsetTop;
			console.log('Y position of the about section:', yStart);
		}
		if (aboutYend) {
		yEnd = aboutYend.offsetTop;
			console.log('Y position of the aboutYend:', yEnd);
		}
	}

	$:{if (scrollY > yStart && scrollY < yEnd) {
			if (previousY < scrollY) {
				previousY = scrollY;
				isScrollingDown = true;
			} else {
				previousY = scrollY;
				isScrollingDown = false;
			}
			console.log('this is scrollingDown', isScrollingDown);
		} else {
			if (isScrollingDown !== null) {
				isScrollingDown = null;
			}
		}}
	
</script>

<section id="about" bind:this={aboutYstart}>
	<h2>About</h2>
	<div class="about-container">
		<p>Hello there I am fabian and I am software developer.</p>
		<SelfImage {isScrollingDown}/>
	</div>
</section>
<div bind:this={aboutYend} />

<style>
	.about-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
	}
</style>
