import type { Language } from '../types';

export const generateNavigationLinks = ({ about, work, contact }: Language['navLinks']) => {
	return [
		{ href: '#about', name: about },
		{ href: '#work', name: work },
		{ href: '#contact', name: contact }
	];
};

export const generateProjectInfo = (selectedProject: string) => {
	if (selectedProject === 'wannago') {
		return {
			name: 'Wannago',
			description: 'Wannago is an amazing app',
			githubLink: 'https://github.com/Fabs-and/wannago',
			website: 'https://www.wannago.in/',
			role: 'Design, Front-end & Back-end Development, Deployment',
			responsibilities: 'UX/UI design. Entire development of the web app.',
			skills: [
				'HTML',
				'CSS',
				'JavaScript',
				'React',
				'React Query',
				'Koa.js',
				'Firebase'
			]
		};
	} else if (selectedProject === 'huddler') {
		return {
			name: 'Huddler',
			description: 'Huddler is an amazing app',
			githubLink: 'https://github.com/Lucasoliveiralucas/huddler-front-end',
			role: 'Design & Front-end Development',
			responsibilities:
				"Aid in the desing of the site. Devised the 'recommended' algorithm. Implemented authorization & user settings",
			skills: ['HTML', 'CSS', 'Typescript', 'NEXT.js', 'Tailwind', 'Amazon Cognito']
		};
	} else if (selectedProject === 'road-trip') {
		return {
			name: 'Road trip - Campgrounds',
			description: 'Road trips is an amazing app',
			githubLink: 'https://github.com/Fabs-and/road-trip-app',
			role: 'Front-end & Back-end Development',
			responsibilities: 'Refactor codebase from JavaScript to Typescript',
			skills: ['HTML', 'CSS', 'Typescript', 'React', 'Mapbox', 'Express', 'MongoDB', 'Mongoose']
		};
	} else if (selectedProject === 'portfolio') {
		return {
			name: "Fabian's Portfolio",
			description: 'Fabian Lopez Gonzalez Portfolio',
			githubLink: 'https://github.com/Fabs-and/portfolio',
			website: 'https://portfolio-fabs-and.vercel.app/',
			role: 'Design, Front-end & Back-end Development, Deployment',
			responsibilities: 'UX/UI design. Entire development of the web app.',
			skills: ['HTML', 'CSS', 'Typescript', 'Svelte', 'Sveltekit']
		};
	}
};
