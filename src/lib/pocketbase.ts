import PocketBase from 'pocketbase'
import { writable } from 'svelte/store';
//Database data
export const pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);
//current session User data
export const currentUser = writable(pb.authStore.model);