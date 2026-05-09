import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wogwftbhfiibzftdrfwg.supabase.co/rest/v1/';
const supabaseAnonKey = 'SUA_CHAVE_ANON_DO_SUPABASE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
