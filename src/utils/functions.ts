export default function scrollTo(event: MouseEvent | Event, speed: number = 1000) {
	// Cast the event target to HTMLAnchorElement or HTMLInputElement
	const target = event.target as HTMLAnchorElement | HTMLInputElement;

	// Determine the attribute based on the event type
	const attribute = event.type === 'click' ? 'href' : event.type === 'change' ? 'value' : '';

	// Return early if the event type is neither click nor change
	if (!attribute) {
		return;
	}

	// Get the value of the attribute from the target element
	const selector = target.getAttribute(attribute);

	let element;
	// Select the element based on the attribute
	if (selector) {
		if (attribute === 'href') {
			element = document.querySelector(selector);
		} else {
			element = document.querySelector(`.${selector}`);
		}
	}

	// Scroll to the element if it exists
	if (element) {
		const start = window.pageYOffset;
		const end = element.getBoundingClientRect().top + window.pageYOffset;
		const distance = end - start;
		const duration = Math.abs(distance / speed) * 1000;

		let startTime: number | null = null;

		function step(timestamp: number) {
			if (!startTime) {
				startTime = timestamp;
			}

			const elapsed = timestamp - startTime;

			window.scrollTo(0, start + (distance * elapsed) / duration);

			if (elapsed < duration) {
				requestAnimationFrame(step);
			}
		}

		requestAnimationFrame(step);
	}
}
