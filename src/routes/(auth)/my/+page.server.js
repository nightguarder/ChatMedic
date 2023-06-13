import { redirect } from '@sveltejs/kit';

//protection Auth Routes

export const load = ({locals}) =>{
    let LoggedIn = false;
	
    if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		LoggedIn = true;
		console.log(LoggedIn);
		return {LoggedIn:true}
	}
	
}