import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supAbaseAPIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
// // 
// console.log(supabaseURL, supAbaseAPIKEY)

const supabase = createClient(supabaseURL, supAbaseAPIKEY)

export default supabase