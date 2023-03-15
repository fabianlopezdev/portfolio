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
			<input id="name" type="text" placeholder="Name" />

			<label for="email" />
			<input id="email" type="text" placeholder="Email" />

			<label for="subject" />
			<input id="email" type="text" placeholder="Subject" />

			<label for="message" />
			<textarea id="message" placeholder="How can I help you?" />

			<button class='button'> Submit <div class='icons'>

			</div></button>
			

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
		position: relative;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		gap: 0.5rem;
		border: 0.3rem solid var(--clr-secondary);
		border-radius: 1rem;
		padding: 1rem;
		margin: 0 1rem;
		/* height: fit-content; */
		/* margin: 0 1rem 0 0.5rem; */
	}
input, textarea {
        box-sizing: border-box; /* Add box-sizing property */
        width: 100%;
        border-radius: 0.5rem;
        border-width: 0.3rem;
        border-color: var(--clr-secondary);
        font-size: 1.15rem;
        padding: 0rem 1rem;
    }

    input {
        height: 2rem;
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
		transform: translate(-50%,55%);
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
	
	.contact-card-container {
		margin-top: 3rem;
		display: flex;
		gap: 1rem;
		/* margin-top: 1rem; */
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
