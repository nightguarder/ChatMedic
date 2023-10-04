import { redirect } from '@sveltejs/kit';


// User is not logged
export const actions = {
	login: async ({ request, locals }) => {
		const formData = await Object.fromEntries(await request.formData());
		//If email is a string or a non-iterable object, you can't use the Object.fromEntries() method on it.
		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
			//Verify if user is verified
			console.log(locals.pb.authStore.isValid);
			console.log(locals.pb.authStore.token);
			console.log(locals.pb?.authStore?.model?.verified);
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
				email: formData.email
			};
		}
		//If success formData redirect to Account
		throw redirect(303, '/my');
	}
};
