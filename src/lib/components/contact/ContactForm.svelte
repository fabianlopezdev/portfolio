<script lang="ts">
	import { enhance } from '$app/forms';
	import IoMdSend from 'svelte-icons/io/IoMdSend.svelte';
	import type { Language } from '../../../types';
	import { Spinner } from '$components';
	export let formLang: Language['contact']['form'];

	$: isLoading = false;
	$: isEmailSent = null;
	const onSubmit = () => {
		isEmailSent = null;
		isLoading = true;
		return ({ result, update }) => {
			isLoading = false;
			if (result.type === 'success') {
				isEmailSent = true;
				console.log('helloooooo');
				update();
			} else {
				isEmailSent = false;
				update();
			}
		};
	};
</script>

<div class="form-container">
	<form method="POST" action="/?/sendEmail" use:enhance={onSubmit}>
		<p>{formLang.p}</p>
		<label>
			<input name="name" type="text" placeholder={formLang.name} required />
		</label>
		<label>
			<input name="email" type="email" placeholder={formLang.email} />
		</label>
		<label>
			<textarea name="message" placeholder={formLang.message} required />
		</label>
		{#if isEmailSent === true}
			<div class="success-alert">
				<p>{formLang.success}</p>
			</div>
		{:else if isEmailSent === false}
			<div class="error-alert">
				<p>{formLang.error}</p>
			</div>
		{/if}
		<button class="button" type="submit" disabled={isLoading}>
			{#if isLoading}
				<Spinner />
			{:else}
				{formLang.button}
				<div class="icons">
					<IoMdSend />
				</div>
			{/if}
		</button>
	</form>
</div>

<style>
	p {
		margin: 0 auto;
	}
	.form-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 1rem;
		
	}

	.form-container:hover {
		box-shadow: 0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2),
              0 0 20px rgba(30, 144, 255, 0.2);
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
		width: 20rem;

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
		border-color: rgba(30, 144, 255, 0.2);
		font-size: 1.15rem;
		padding-left: 1rem;
		padding-right: 1rem;
		background: var(--clr-bg-items);
	}

	textarea:focus {
		outline: none;
		border-color: var(--clr-secondary);
	}

	input:focus {
		outline: none;
		border-color: var(--clr-secondary);
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

	.button {
		align-items: center;
		padding: 0.5rem;
		border-radius: 0.5rem;
		width: 20rem;
		max-width: 100%;
	}
	button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
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

	.success-alert {
		background-color: #D5EDDB;
		color:#2C693A;
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 0.5rem;
		width: 20rem;
		max-width: 100%;
		font-weight: 500;
		box-sizing: border-box;
	}

	.error-alert{
		background-color: #F8D6DB;
		color:#721C24;
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 0.5rem;
		width: 20rem;
		max-width: 100%;
		font-weight: 500;
		box-sizing: border-box;
	}
</style>
