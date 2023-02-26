<script>
	import { Button } from '$components';
	import scrollTo from '../../utils/functions'

</script>

<section>
	<h2>
		Transforming your web vision into a <span>stunning</span> and
		<span >functional</span> reality.
	</h2>
	<h1 style="color: #016AA1">Hello, I am Fabian!</h1>
	<div style="display: flex; gap: 1em;">
		<Button --color="blue" on:click={scrollTo} href={'#contact'} icon={'envelope'}/>
		<Button --color="black" href={'/Fabian-Lopez-Resume.pdf'} icon={''}>Resume</Button>
	</div>
</section>

<style>
	span {
		display: inline-block;
		position: relative;
		z-index: 1;
		color: white;
	}

	span::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 90%;
		top: 10px;
		left: -2px;
		z-index: -1;
		transform: rotate(-1deg);
		background-color: blue;
	}

	section {
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
  @media screen and (max-width: 668px) {
    h2 {
      font-size: 2.5rem;
    }
	}

  @media screen and (max-height: 668px) {
		section {
      /* margin-top: 10em; */
      /* height: 100vh; */
      /* margin-bottom: 10em; */
      gap: 1em;
    }
    h2 {
      font-size: 2.5rem;
    }
	}
</style>
