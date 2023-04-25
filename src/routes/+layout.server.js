import { serializeNonPOJOs } from '../lib/utils.js';
//Access profile data throughout the App
export const load = ({ locals }) => {
	if (locals.user && locals.user.profile) {
		return {
			profile: serializeNonPOJOs(locals.user.profile)
		};
	}
	return {
		user: undefined
	};
};
