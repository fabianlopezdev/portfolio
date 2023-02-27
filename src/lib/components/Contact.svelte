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
		</form>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.form-container {
		border: 0.1rem solid var(--clr-secondary);
		border-radius: 0.5em;
		padding: 2rem;
		display: inline-block;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	input {
		height: 2rem;
		border-radius: 0.5rem;
		border: none;
	}
	textarea {
		border-radius: 0.5rem;
		border: none;
	}
</style>
