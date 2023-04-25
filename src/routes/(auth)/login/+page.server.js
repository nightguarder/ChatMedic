import { redirect } from '@sveltejs/kit';

// User is not logged
export const actions = {
    login: async ({request, locals}) =>{
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])
        try {
            await locals.pb.collection('users').authWithPassword(data.email,data.password)
            if(!locals.pb?.authStore?.mode?.verified){
                locals.pb.authStore.clear()
                //throw an warning that user is not verified
                return{
                    notVerified: true
                };
            }
        }
        //else throw an error
        catch (err){
            console.log('Error:',err)
            return{
                error: true,
                email: data.email,
            }
        }
        //If success redirect
        throw redirect(303,'/account')
    }
}

