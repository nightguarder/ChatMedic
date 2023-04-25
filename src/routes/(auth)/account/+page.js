import { redirect } from '@sveltejs/kit';

//protection Auth Routes
export const load = ({locals}) => {
	if(locals.pb.authStore.isValid){
		throw redirect(303,'/');
	}
	const user = {
		name: 'Cyril',
		email: 'cyril.steger@gmail.com',
		role: 'admin'
	};
	return {
		user
	};
};
