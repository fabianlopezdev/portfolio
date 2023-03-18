<!-- ContactCard.svelte -->
<script>
  export let href = '';
  export let contactInfo = '';
  export let cardTitle = '';
  export let centered = false;
</script>

<div class="contact-card">
  <div class={`content ${centered ? 'centered' : ''}`}>
    <div class="icons">
      <slot />
    </div>
    <div>
      {cardTitle}
      <br />
      <a {href} target="_blank" class="email">{contactInfo}</a>
    </div>
  </div>
</div>

<style>
  .contact-card {
    width: 17rem;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .centered {
    justify-content: center;
  }

  .email {
    font-size: 1.15rem;
    font-weight: 700;
  }

  .icons {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
  }
</style>
