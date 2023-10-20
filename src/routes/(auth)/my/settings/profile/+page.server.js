import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// Access the user's name from locals.user
	try {
		// Store the user's name in locals.user
		// Update the first letter of the name in the avatar placeholder
		const firstName = locals.user.name[0];
		return {
			success: true,
			firstName
		};
	} catch (err) {
		console.log('Error:', err);
		throw error(400, 'Something went wrong updating your profile');
	}
};
