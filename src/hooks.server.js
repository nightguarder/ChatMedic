
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
//your pockethost server

// This function runs every time the SvelteKit server receives a request!
export const handle = async ({ event, resolve }) => {
	// ?? I'm not sure if the secret works.
	//https://youtu.be/AxPB3e-3yEM
	event.locals.pb = new PocketBase('https://chat-medic.pockethost.io');

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
