export function animateOnScroll(node) {
	let firstObservation = true;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (firstObservation) {
					firstObservation = false;
					return;
				}

				if (entry.isIntersecting) {
					node.classList.add('animate');
					// Stop observing the element once it has intersected
					observer.unobserve(node);
				}
			});
		},

		{
			rootMargin: '0px',
			threshold: 0.1
		}
	);

	observer.observe(node);
}
