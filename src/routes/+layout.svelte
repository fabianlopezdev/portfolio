<slot />

<style>
	:global(body) {
		background-color: #f9fcfd;
    font-family: system-ui;
	}
	:global(body.dark) {
		background-color: black;
		font-family: system-ui;
		color: white;
	}
  :global(.icons) {
    background: none;
		color: gray;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
    width: 1.5em;
    height: 1.5em;
  }
</style>
