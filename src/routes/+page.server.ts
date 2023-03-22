import post from '../../../../../Development/svelte/portfolio/src/routes/api/+page.server';

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
			await post(name, email, message)
		console.log('event', name, email, message)
	},
// 	post: async (req, res) => {
// 	console.log('heerrreeee');
// 	const { name, email, message } = req.body;

// 	// Validate form input
// 	if (!name || !email || !message) {
// 		return res.status(400).json({ error: 'All fields are required.' });
// 	}

// 	// Set up Nodemailer transporter
// 	const transporter = nodemailer.createTransport({
// 		host: 'your_smtp_server',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: 'your_email',
// 			pass: 'your_email_password'
// 		}
// 	});

// 	// Set up email options
// 	const mailOptions = {
// 		from: email,
// 		to: 'your_email',
// 		subject: 'New contact form submission',
// 		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
// 	};

// 	// Send the email
// 	try {
// 		await transporter.sendMail(mailOptions);
// 		res.status(200).json({ message: 'Email sent successfully.' });
// 	} catch (error) {
// 		console.error('Error sending email:', error);
// 		res.status(500).json({ error: 'Failed to send email.' });
// 	}
// }
};

//Read cookie to pass value to the page
export const load = ({ cookies, request }) => {
	//get the preferred languge by the language used in the browser
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
