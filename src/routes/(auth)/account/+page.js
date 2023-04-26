import { redirect } from '@sveltejs/kit';

//protection Auth Routes
export const load = ({ locals }) => {
	if (locals.user && locals.user.profile) {
		return {
			profile: serializeNonPOJOs(locals.user.profile)
		};
	}
};
