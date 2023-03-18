<script>
  	import IoMdSend from 'svelte-icons/io/IoMdSend.svelte';
</script>

<div class="form-container">
			<p>Send me a message:</p>
			<form>
				<label for="name" />
				<input id="name" type="text" placeholder="Name" />

				<label for="email" />
				<input id="email" type="text" placeholder="Email" />

				<label for="subject" />
				<input id="email" type="text" placeholder="Subject" />

				<label for="message" />
				<textarea id="message" placeholder="How can I help you?" />

				<button class="button">
					Submit <div class="icons">
						<IoMdSend />
					</div></button
				>
			</form>
		</div>

    <style>
      	.form-container{
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	form {
		position: relative;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		gap: 0.5rem;
		border: 0.3rem solid var(--clr-secondary);
		border-radius: 1rem;
		padding: 1rem;
		width: 18rem; 

		/* max-width: 866px; */

		/* height: fit-content; */
		/* margin: 0 1rem 0 0.5rem; */
	}

	input,
	textarea {
		box-sizing: border-box; /* Add box-sizing property */
		width: 100%;
		border-radius: 0.5rem;
		border-width: 0.3rem;
		border-color: var(--clr-secondary);
		font-size: 1.15rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	input {
		height: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	textarea {
		resize: none;
		height: 7rem;
		margin-bottom: 1.5rem;
	}

	form::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: transparent;
	}

	button {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 55%);
		/* margin-top: 21rem; */
		/* margin-top: 0.5rem; */
		/* left: 6.5rem; */
		border: none;
		color: var(--clr-font-contrast);
		background-color: var(--clr-accent);
	}

	.button {
		align-items: center;
	}

	.icons {
		color: white;
	}
    </style>