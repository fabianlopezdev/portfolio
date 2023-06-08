import { onMount } from 'svelte';

export function useIntersectionObserver(node, options) {
	let observer;

	const defaultOptions = {
		rootMargin: '0px',
		threshold: 0.1
	};

	function callback(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.classList.add('animate');
			} else {
				node.classList.remove('animate');
			}
		});
	}

	onMount(() => {
		observer = new IntersectionObserver(callback, { ...defaultOptions, ...options });
		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	});
}
