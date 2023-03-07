export const actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const lang = formData.get('lang');
		cookies.set('lang', lang);
		return {
			success: true
		};
	}
};

//Read cookie to pass value to the page
export const load = ({cookies, request}) => {
  //get the preferred languge by the language used in the browser
  const accepted = request.headers.get('accept-language')?.match(/[a-zA-Z\-]{2,10}/gm) || ['en'];

  let defaultLang = accepted.includes('es') ? 'es' : 'en';
  const currentCookie = cookies.get('lang');
  if(!currentCookie) {
    cookies.set('lang', defaultLang)
  }

  return {
    lang: currentCookie
  }
  //
}

