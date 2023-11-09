export const load = ({ locals }) => {
	if (locals.user) {
		let firstChar = locals.user.name[0];
		let secondChar = locals.user.name[1].toUpperCase();
		//console.log("First + SecondChar:"+firstChar +secondChar);
		return {
			user: locals.user,
			name: locals.user.name,
			firstChar,
			secondChar,
			loggedIn: true
		};
	} else
		return {
			user: undefined,
			loggedIn: false
		};
};
