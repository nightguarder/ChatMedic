import { Handle, redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";
import { currentUser, pb } from "./lib/pocketbase";

export const handle: Handle = async ({event, resolve}) =>{

    const cookie = event.request.headers.get('cookie');

	event.locals.pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(cookie || '', process.env.COOKIE_NAME);

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model) ?? undefined;
	} else {
		event.locals.user = undefined;
	}
    
    //*SECURED cookie 
    const response = await resolve(event);

    const cookieOpt ={
        secure: true,
        sameSite: 'lax',
        maxAge: 3600, //Expire the cookie in 1 hours
        expires: new Date(Date.now()+3600 *1000), //Expire the cookie in 1 hour
    };

    response.headers.append('set-cookie',event.locals.pb.authStore.exportToCookie(cookieOpt, process.env.COOKIE_NAME));
    return response;
}