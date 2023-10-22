import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '$lib/crypto';

export const actions = {
	register: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(data);
		let username = generateUsername(data.name.split(' ').join('')).toLowerCase();
		//console.log("username=" + username);
		//get data from form and push them to pb
		//email has to be verified before login
		try {
			await locals.pb.collection('users').create({ username, ...data });
			await locals.pb.collection('users').requestVerification(data.email, data.password);
		} catch (err) {
			console.log('RegisterError: ', err);
			return {
				error: true,
				email: data.email,
				password: data.password
			};
		}
		//TODO: Create a formValidation  success(daisyUI) and redirect
		//If succesfull redirect to login page
		//alert('Registration succesfull!\n Please confirm your email before logging in.');
		throw redirect(303, '/login');
	}
};
