import { redirect } from '@sveltejs/kit';

// User is not verified!
export const actions = {
    login: async ({request, locals}) =>{
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            const {token, user} = await locals.pb.users.autViaEmail(data.email,data.password);
        }
        catch (_){
            console.log('Error:',err)
            return{
                error: true,
                email: data.email,
                throw: error(500, 'Something went wrong during login.')
            }
        }
        throw redirect(303,'/account')
    }
}

