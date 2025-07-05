import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {

    const token = getRequestHeader(event,'authorization')?.replace('Bearer', '');

    if(!token) throw createError({statusCode: 401, message: "Unauthorized"})

    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl as string, config.public.supabaseAnonKey as string)

    const {data, error} = await supabase.auth.getUser(token);

    if (error || !data?.user) throw createError({statusCode: 401 , message: "Invalide token"})

    event.context.user = data.user;
})