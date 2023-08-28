// supabase client setup
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_NEXT_PUBLIC_SUPABASE_ANON_KEY;
export default supabase = createClient(supabaseUrl, supabaseAnonKey);
