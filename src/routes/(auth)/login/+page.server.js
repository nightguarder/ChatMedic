import { redirect } from '@sveltejs/kit';

// User is not logged
export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		console.log(formData);
		//If email is a string or a non-iterable object, you can't use the Object.fromEntries() method on it.
		const data = Object.fromEntries(formData);
		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			//else throw an error
			console.log('LoginError:', err);
			return {
				error: true,
				email: data.email
			};
		}
		//If success redirect
		throw redirect(303, '/account');
	}
};
