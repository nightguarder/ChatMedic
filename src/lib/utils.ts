import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

//TODO: 
// Merge utils.js and utils.ts
export const serializeNonPOJOs = (obj: any) => {
	return structuredClone(obj);
};



//Add cn from shadcsui
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}