export const load = ({ locals }) => {
	let firstLetter =locals.user.name[0];
	let secondLetter = locals.user.name[1];
	if (locals.user) {
		return {
			user: locals.user,
			firstLetter,
			secondLetter
		};
	}
	//User is probably not logged in
	return {
		user: undefined
	};
};