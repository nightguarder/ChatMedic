//Run this hook on page load (client-side)

import { currentUser } from "./lib/pocketbase";
import { pb } from "./lib/pocketbase";

//User is logged back based on cookies
pb.authStore.onChange(()=>{
    currentUser.set(pb.authStore.model);
    document.cookie = pb.authStore.exportToCookie({httpOnly: false});
})
