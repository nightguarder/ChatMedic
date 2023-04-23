import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../../lib/utils.js';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = generateUsername(body.name.split(' ').join(' ').toLowerCase());
		//get data from form and push them to pb
		//email has to be verified before login
		try {
			await locals.pb.collection('users').create({ username, ...body });
			await locals.pb.collection('users').requestVerification(body.email);
		} catch {
			//Return error
			console.log('Error: ', error);
			throw error(500, 'Something went wrong during registration.');
		}
		//TODO: Create a popup window to confirm the email.
		//If succesfull redirect to login page
		throw redirect(303, '/login');
	}
};
