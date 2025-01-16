import {createClient} from '@supabase/supabase-js';

const urlSupabase = "https://ossisvnlzipyilifvydn.supabase.co";
const apiKeySupabase = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(urlSupabase, apiKeySupabase)

export default supabase

// db.js
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export { sql }
