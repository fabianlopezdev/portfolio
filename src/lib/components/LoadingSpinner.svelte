<!-- Spinner.svelte -->
<div class="spinner">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

<style>
.spinner {
	display: inline-block;
	position: relative;
	width: 20px; /* reduced the size */
	height: 20px; /* reduced the size */
}

.spinner div {
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 20px; /* reduced the size */
	height: 20px; /* reduced the size */
	/* margin: 2px; reduced the size */
	border: 2px solid #fff; /* reduced the size */
	border-radius: 50%;
	animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #fff transparent transparent transparent;
}

.spinner div:nth-child(1) {
	animation-delay: -0.45s;
}
.spinner div:nth-child(2) {
	animation-delay: -0.3s;
}
.spinner div:nth-child(3) {
	animation-delay: -0.15s;
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
