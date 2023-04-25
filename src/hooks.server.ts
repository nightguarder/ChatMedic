import { Handle, redirect } from "@sveltejs/kit";
import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "./lib/utils";

export const handle: Handle = async ({event, resolve}) =>{

    const cookie = event.request.headers.get('cookie');

	event.locals.pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(cookie || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model) ?? undefined;
	} else {
		event.locals.user = undefined;
	}
    
    //*SECURED cookie 
    const response = await resolve(event);

    response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: true, httpOnly: false, maxAge: 3600 })
	);
    return response;
}