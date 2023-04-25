import { redirect } from '@sveltejs/kit';

// User is not verified!

export const load = ({ locals }) => {
	const userdata = await;
};
