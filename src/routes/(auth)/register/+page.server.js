import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../../lib/utils.js';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
		console.log(body);
		let username = generateUsername(body.name.split(' ').join('')).toLowerCase();
		//console.log("username=" + username);
		//get data from form and push them to pb
		//email has to be verified before login
		try {
			await locals.pb.collection('users').create({ username, ...body });
			await locals.pb.collection('users').requestVerification(body.email,body.password);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong during registration.');
		}
		//TODO: Create a popup window to confirm the email.
		//If succesfull redirect to login page
		alert("Registration succesfull!\n Please confirm your email before logging in.")
		throw redirect(303, '/login');
	}
};
