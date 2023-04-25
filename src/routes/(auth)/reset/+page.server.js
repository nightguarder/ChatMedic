export const actions = {
    reset: async ({request, locals}) =>{
        const body = Object.fromEntries(await request.formData())

        try {
            //TODO: form validation if email is not found 
            await locals.pb.collection('users').requestPasswordReset(body.email);
            return{
                success: true
            };
        } catch (error) {
            console.log('Error: ', err);
			throw error(500, 'Something went wrong during password reset.');
        }
    }
}