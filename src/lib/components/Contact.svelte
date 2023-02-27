<script>
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';

	import GoCalendar from 'svelte-icons/go/GoCalendar.svelte'
</script>

<section id="contact">
	<h2>
		Tell me about your project
		<br />
		Let's talk!
	</h2>
	<div class="form-container">
		<form>
			<label for="name"></label>
			<input id="name" type="text" placeholder=" Name" />

			<label for="email"></label>
			<input id="email" type="text" placeholder=" Email"/>
			
			<label for="subject"></label>
			<input id="email" type="text" placeholder=" Subject"/>

			<label for="message"></label>
			<textarea id="message" cols="60" rows="10" placeholder=" How can I help you?" />
			<button>
				Submit
			</button>
		</form>
	</div>
	<div class='articles-container'>
		<article>
			<div class='icons'>
				<EnvelopeIcon/>
			</div>
			<div>
				Send me an email:
				<br>
				<a class='email'>
					fabianlopez@pm.me
				</a>
			</div>
		</article>
		<article><div class='icons'>
				<GoCalendar/>
			</div>
			<div>
				Schedule a cal with Calendly:
				<br>
				<a class='email'>
					/fabian-lopez-gonzalez
				</a>
			</div></article>
	</div>
	</section>

<style>
	.articles-container {
		display: flex; 
		gap: 1rem;
		margin-top:1rem;
	}
	.icons{
		width:3rem;
		height: 3rem;
	}
	.email {
		font-size: 1.15rem;
		font-weight: 700;
	}
	article {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	section {
		height: 100vh;
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	button {
		position: absolute;
		/* bottom: 0; */
		margin-top: 23.5rem;
		text-align: center;
		width: 215px;
		padding: 1rem;
		border-radius: 1rem;
		font-size: 15.8px;
		font-weight: 700;
		border: none;
		color: var(--clr-font-contrast);
		background-color: var(--clr-accent);
	}
	button:hover {
		cursor: pointer
	}
	.form-container {
		position: relative;
		border: 0.1rem solid var(--clr-secondary);
		border-radius: 1em;
		padding: 2rem;
		display: inline-block;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items:center;
		gap: 1rem;
	}
	input {
		height: 2rem;
		border-radius: 1rem;
		border: none;
		width: fit-content;
	}
	textarea {
		border-radius: 1rem;
		border: none;
	}
</style>
