const { randomBytes } = await import('node:crypto');

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