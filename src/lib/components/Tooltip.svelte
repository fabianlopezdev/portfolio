<!-- Tooltip.svelte -->
<script>
  export let text = '';
</script>

<style>
  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: #333; */
    color: black;
    text-align: center;
    padding: 2px;
    /* border-radius: 4px; */
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s;
  }

  .tooltip.show {
    visibility: visible;
    opacity: 1;
  }
</style>

<div class="tooltip {text ? 'show' : ''}">{text}</div>
