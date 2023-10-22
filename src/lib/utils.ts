import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
const { randomBytes } = await import('node:crypto');



//TODO: 
// Merge utils.js and utils.ts
export const serializeNonPOJOs = (obj: any) => {
	return structuredClone(obj);
};

// generate a username
export const generateUsername = async (name: string): Promise<string> => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
  };

//MERGE END
//Pocketbase return nonsearilized POJOs.

//generate a random username id
//export const generateUsername = (name) => {
	//const id = randomBytes(2).toString('hex');
	//return `${name.slice(0, 5)}${id}`;
//};
//


//Add cn from shadcsui
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}