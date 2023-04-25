import { Actions, error, redirect } from '@sveltejs/kit';
import { generateUsername } from '../../../lib/utils.js';

export const actions: Actions = {
    //wait for the form data to be POSTED and convert them to string
    register: async({locals,request}) =>{
        const data = Object.fromEntries(await request.formData()) as {
            name: string; //John Doe
            email: string; // john.doe@gmail.com
            password: string; //Test 12345
            passwordConfirm: string; //Test 12345
        };
        //create a username
        let username = generateUsername(data.name.split(' ').join(' ')).toLowerCase();
		try {
            //get data from form and push them to pb
			await locals.pb.collection('users').create({ username, ...data });
			//email has to be verified before login 
			await locals.pb.collection('users').requestVerification(data.email, data.password);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong during registration.');
		}
		//TODO: Create a popup window to confirm the email.
		//If succesfull redirect to login page
		throw redirect(303, '/login');    
    } 
}