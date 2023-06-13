import { redirect } from '@sveltejs/kit';

export const POST = ({locals})=>{
    locals.pb.authStore.clear();
    locals.user = undefined; //user is now logged out
    throw redirect(303,'./login'); 
};