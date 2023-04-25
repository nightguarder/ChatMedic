import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../../lib/utils.js';

export const actions = {
	register: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(data);
		let username = generateUsername(data.name.split(' ').join(' ')).toLowerCase();
		//get data from form and push them to pb
		try {
			await locals.pb.collection('users').create({ username, ...data });
			//email has to be verified before login 
			await locals.pb.collection('users').requestVerification(data.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong during registration.');
		}
		//TODO: Create a popup window to confirm the email.
		//If succesfull redirect to login page
		throw redirect(303, '/login');
	}
};
