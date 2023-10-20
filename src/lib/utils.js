const { randomBytes } = await import('node:crypto');
//pocketbase return nonPOJO's
//Convert them to JSON parsed objects
export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};
//generate a random username id
export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

//Add a cn helper
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

