<script>
	import { ContactCard } from '$components';
	import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
	//  cont iconImg = <EnvelopeIcon/>
	import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
	import { HtmlTag } from 'svelte/internal';
</script>

<section id="contact">
	<h2>
		Tell me about your project
		<br />
		Let's talk!
	</h2>
	<div class="form-container">
		<form>
			<label for="name" />
			<input id="name" type="text" placeholder=" Name" />

			<label for="email" />
			<input id="email" type="text" placeholder=" Email" />

			<label for="subject" />
			<input id="email" type="text" placeholder=" Subject" />

			<label for="message" />
			<textarea id="message" placeholder=" How can I help you?" />
			<button> Submit </button>
		</form>

		<div class="contact-card-container">
			<ContactCard
				href={'fabianlopez@pm.me'}
				cardTitle={'Send me an email:'}
				contactInfo={'fabianlopez@pm.me'}
			>
				<EnvelopeIcon />
			</ContactCard>
			<ContactCard
				href={'fabianlopez@pm.me'}
				cardTitle={'Schedule a call with Calendy'}
				contactInfo={'/fabian-lopez-gonzalez'}
			>
				<GoCalendar />
			</ContactCard>
		</div>
	</div>
</section>

<style>
	section {
		justify-content: space-evenly;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		gap: 0.5rem;
		position: relative;
		border: 0.5rem solid var(--clr-secondary);
		border-radius: 1rem;
		padding: 1rem;
		margin: 0 1rem 0 0.5rem;
	}
	input {
		/* width: 100%; */
		height: 2rem;
		border-radius: 1rem;
		border-width: 0.3rem;
		border-color: var(--clr-secondary);
		font-size: 1.15rem;
		/* border: none; */
		/* width: max-content; */
	}
	
	textarea {
		font-size: 1.15rem;
		border-radius: 1rem;
		width: 100%;
		height: 7rem;
		margin-bottom: 0.5rem;
	}
	
	button {
		position: absolute;
		margin-top: 21rem;
		/* left: 6.5rem; */
		display:flex;
		align-self: center;
		/* right: auto; */
		/* text-align: center; */
		width: 215px;
		padding: 1rem;
		border-radius: 1rem;
		font-size: 15.8px;
		font-weight: 700;
		border: none;
		color: var(--clr-font-contrast);
		background-color: var(--clr-accent);
		cursor: pointer;
	}
	
	.contact-card-container {
		margin-top: 3rem;
		display: flex;
		gap: 1rem;
		/* margin-top: 1rem; */
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
