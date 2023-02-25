<script lang="ts">
	import {
		Nav,
		About,
		Projects,
		Contact,
		ToggleDark,
		SocialLinks,
		Logo,
		Home,
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
	<Home/>
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<Nav />
</footer>

<style>

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
