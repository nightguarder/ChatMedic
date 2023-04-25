import { Handle, redirect } from "@sveltejs/kit";
import { currentUser, pb } from "./lib/pocketbase";

export const handle: Handle = async ({event, resolve}) =>{

    pb.authStore.loadFromCookie(event.request.headers.get('cookie')|| '')

    if (pb.authStore.isValid) {
        try{
            await pb.collection('users').authRefresh()
        }
       // *If its not valid: "logout" the last authenticated account
        catch(_){
            pb.authStore.clear();
        }
	}
    else{
    // If the user is not authenticated, redirect to the login page
    if (event.request.url !== '/login') 
        throw redirect(303, '/login');
      
    }
    //Pass context values to backend
    event.locals.pb = pb;
    //and convert to JSON
    event.locals.user =structuredClone(pb.authStore.model);
    
    //*SECURED cookie 
    const response = await resolve(event);
    const cookieOpt ={
        httpOnly: true,
        secure: true,
        maxAge: 3600, //Expire the cookie in 1 hours
        expires: new Date(Date.now()+3600 *1000), //Expire the cookie in 1 hour
    };
    const cookies = pb.authStore.exportToCookie(cookieOpt);

    response.headers.append('set-cookie', cookies);
    return response;
}