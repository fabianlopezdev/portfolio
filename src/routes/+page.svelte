<script lang="ts">
	import {
		Nav,
		About,
		Projects,
		Contact,
		ToggleDark,
		SocialLinks,
		Logo,
		Button
	} from '$components';
	let isDark: boolean = false;

	$: activeClass = isDark ? 'dark' : 'light';
</script>

<header>
	<div class="container">
		<Logo />
		<div class="both">
			<ToggleDark bind:isDark />
			<SocialLinks />
		</div>
	</div>
	<div class="nav">
		<Nav />
	</div>
</header>

<main>
	<section class="home-section">
  <h2>
    Transforming your web vision into a <span class="highlight">stunning</span> and 
    <span class="highlight">functional</span> reality.
  </h2>
  <h1 style='color: #016AA1'>Hello, I am Fabian<span >!</span></h1>
  <div style="display: flex; gap: 1em;">
    <Button --color="blue" icon={'envelope'}>Contact me</Button>
    <Button --color="black">Resume</Button>
  </div>
</section>
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>
	.highlight {
  display: inline-block;
  position: relative;
  z-index: 1;
	color: white;
}

.highlight::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 90%;
	top: 10px;
  left: -2px;
  /* bottom: px; */
  z-index: -1;
  transform: rotate(-1deg);
  background-color: blue;
}

	.icon {
		width: 30px;
	}
	h1 {
		margin-top: 0;
	}
	.home-section {
		height: calc(100vh - 66px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #6a6b6b;
		font-size: 1.5em;
		margin: 0 0 0 0;
		gap: 2em;
	}
	h2 {
		font-size: 3.8rem;
		color: black;
		max-width: 800px;
		text-align: center;
		line-height: 1;
		margin: 0 0 0 0;
	}
	header {
		position: relative;
		margin: 0;
	}
	.container {
		height: 66px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 866px;
		text-align: center;
		margin: 0.7em auto 0 auto;
	}
	.both {
		display: flex;
		gap: 2em;
	}
	.nav {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	@media screen and (max-width: 570px) {
		.container {
			flex-direction: column;
			gap: 1em;
			margin: 2em;
		}
		.nav {
			display: none;
		}
		.both {
			gap: 1em;
			justify-content: space-around;
			margin-left: 1em;
		}
	}
</style>
