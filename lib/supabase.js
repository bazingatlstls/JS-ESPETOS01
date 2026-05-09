import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wogwftbhfiibzftdrfwg.supabase.co/rest/v1/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZ3dmdGJoZmlpYnpmdGRyZndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDc0ODcsImV4cCI6MjA5Mzg4MzQ4N30.NRUZVrfJVqRJeXRSpMcV-V9H5oxJJfU2QsSkcDURisk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
