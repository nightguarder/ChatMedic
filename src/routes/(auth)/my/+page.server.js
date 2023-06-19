import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	let firstName = locals.user.name[0];
	let lastName = locals.user.name[1];
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		//console.log(firstName + lastName)
		return {firstName,lastName}
	}
};