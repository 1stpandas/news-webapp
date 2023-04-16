import { createClient } from '@supabase/supabase-js'

// variable ini adalah koneksi ke database supabase
// dengan menyediakan SUPABASE_URL dan SUPABASE_ANON_KEY yang sudah diatur di file '.env.local'
// variabel diexport danakan digunakan untuk mengakses database pada file lainya
const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL || '',
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)
export default supabase
