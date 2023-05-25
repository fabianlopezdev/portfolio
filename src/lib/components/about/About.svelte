<script>
</script>

<section id="about">
	<h2>About</h2>
	<div class="about-container">
		<p>Hello there I am fabian and I am software developer.</p>
		<div class="person">
			<div class="person-container">
				<img class="person-circle" src="./blue-dots.jpg" alt="" />
				<img class="person-img" src="./self-foto.png" alt="Fabian being welcoming" />
			</div>
		</div>
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

	.person {
		--transform-speed: 250ms;
		position: relative;
		max-width: 15rem;
		margin-inline: auto;
	}

	.person-container {
		aspect-ratio: 1/ 1.25;
		display: grid;
		align-items: end;
		border-radius: 0 0 100vw 100vw;
		overflow: hidden;
		transition: transform var(--transform-speed) ease;
	}

	.person-container:hover {
		transform: scale(1.1);
	}
	.person-circle {
		position: absolute;
		inset: auto 0 0;
		width: 100%;
		aspect-ratio: 1/1;
		border-radius: 50%;
		margin-inline: auto;
		object-fit: cover;
	}
	.person-img {
		position: relative;
		z-index: 2;
		transform: scale(1);
		transition: transform calc(var(--transform-speed) * 1.2) ease;
	}

	.person-container:hover .person-img {
		transform: 
			scale(1) 
			translateY(-1.28rem);
	}
</style>
