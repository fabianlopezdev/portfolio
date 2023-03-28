import {post} from '../nodemailer';

export const actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const lang = formData.get('lang');
		cookies.set('lang', lang as string);
		return {
			success: true
		};
	},
	sendEmail: async ({request}) => {
			const formData = await request.formData();
			const name = formData.get('name');			
			const email = formData.get('email');
			const message = formData.get('message');
			console.log(name, email, message);
			await post(request)
		// console.log('event', name, email, message)
	},
};

//Read cookie to pass value to the page
export const load = ({ cookies, request }) => {
	//get the preferred language by the language used in the browser
	const accepted = request.headers.get('accept-language')?.match(/[a-zA-Z-]{2,10}/gm) || ['en'];

	const defaultLang = accepted.includes('es') ? 'es' : 'en';
	const currentCookie = cookies.get('lang');
	if (!currentCookie) {
		cookies.set('lang', defaultLang);
	}

	return {
		lang: currentCookie
	};
	//
};
