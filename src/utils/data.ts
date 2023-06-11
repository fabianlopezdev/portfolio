import type { Language } from '../types';

export const generateNavigationLinks = ({ about, work, contact }: Language['navLinks']) => {
	return [
		{ href: '#about-section', name: about },
		{ href: '#work', name: work },
		{ href: '#contact', name: contact }
	];
};

export const skills = [
	{
		name: 'HTML',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'
	},
	{
		name: 'CSS',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'
	},
	{
		name: 'JavaScript',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
	},
	{
		name: 'Typescript',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
	},
	{
		name: 'React',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
	},
	{
		name: 'NEXT.js',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
	},
	{
		name: 'Svelte',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
	},
	{
		name: 'Node',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
	},
	{
		name: 'Express',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
	},
	{
		name: 'PostgreSQL',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
	},
	{
		name: 'MongoDB',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
	},
	{
		name: 'Tailwindcss',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
	}
];
