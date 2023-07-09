import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get the lang cookie from the event or use 'en' as default
	const lang = event.cookies.get('lang') || 'en';

	// replace the %lang% placeholder with the lang value
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
