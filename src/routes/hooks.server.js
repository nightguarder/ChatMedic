import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '../lib/utils';
import { POCKETBASE_URL} from '$env/static/private';
//your pockethost server


// This function runs every time the SvelteKit server receives a request!
export const handle = async ({ event, resolve }) => {
	// ?? I'm not sure if the secret works.
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	
	//check if a cookie exists
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}
	const response = await resolve(event);

	// TODO: secure before deployment.
	//export authObject to cookie
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
