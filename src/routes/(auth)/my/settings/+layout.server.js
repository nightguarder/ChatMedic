import { redirect } from '@sveltejs/kit';

//Check all pages on load under settings/
export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};
