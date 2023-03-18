<script>
  import { ContactCard } from '$components';
  import EnvelopeIcon from 'svelte-icons/fa/FaRegEnvelope.svelte';
  import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
  import FaWhatsapp from 'svelte-icons/fa/FaWhatsapp.svelte';
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import FaRegCalendarCheck from 'svelte-icons/fa/FaRegCalendarCheck.svelte';
</script>

<div class="outer-container">
  <div class="contact-card-container">
    <ContactCard
      href={'fabianlopez@pm.me'}
      cardTitle={'Send me an email:'}
      contactInfo={'fabianlopez@pm.me'}
    >
      <EnvelopeIcon />
    </ContactCard>
    <ContactCard
      href={'https://calendly.com/fabian-lopez-gonzalez'}
      cardTitle={'Schedule a call with Calendy'}
      contactInfo={'/fabian-lopez-gonzalez'}
    >
      <FaRegCalendarCheck />
    </ContactCard>
		<div class='whatsapp'>

			<ContactCard href={'https://wa.me/34664359284'} cardTitle={'Whatsapp me!'} contactInfo={'/Fabi'}>
				<FaWhatsapp />
			</ContactCard>
		</div>
		</div>
</div>

<style>
  .outer-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .contact-card-container {
    display: flex;
    flex-wrap: wrap;
		justify-content: center;
    align-content: flex-start;
    gap: 1rem;
    padding: 0.5rem;
    width: auto;
  }
@media (max-width: 886px) {
  .contact-card-container {
    justify-content: space-evenly;
  }
}
</style>
