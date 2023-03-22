<script lang='ts'>
  	import IoMdSend from 'svelte-icons/io/IoMdSend.svelte';
	import type { Language } from '../../../types';

		export let form: Language['contact']['form']

		const handleSubmit = (event) => {
	
		}
</script>

<div class="form-container">
	<form method='POST' action='/?/sendEmail' >
				<p>{form.p}</p>
				<label>
					<input name="name" type="text" placeholder={form.name} required>
				</label>
				<label>
					<input name="email" type="email" placeholder={form.email}>
				</label>
				<label>
					<textarea name="message" placeholder={form.message} required/>
				</label>

				<button class="button" type='submit'>
					{form.button}<div class="icons">
						<IoMdSend />
					</div></button
				>
			</form>
		</div>

  <style>
			p {
				margin: 0 auto;
			}
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
	
	.button {
		align-items: center;
		padding: 0.5rem; 
		border-radius: 0.5rem;
		width: 20rem;
		max-width: 100%;

	}
	input {
		height: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	textarea {
		resize: none;
		height: 7rem;
		/* margin-bottom: 1.5rem; */
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
		border: none;
		color: var(--clr-font-contrast);
		background-color: var(--clr-accent);
		margin-top: 0.5rem;
	}


	.icons {
		color: white;
	}

</style>