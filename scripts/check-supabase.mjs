import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) {
  console.error("Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

// Querying a table that does not exist proves the URL and key are accepted:
// PostgREST answers "table not found" (PGRST205) only after authenticating the request.
const { error } = await supabase.from("__connection_check__").select("*").limit(1);

if (!error || error.code === "PGRST205" || error.code === "42P01") {
  console.log(`Connected to Supabase at ${url}`);
} else {
  console.error("Supabase connection failed:", error.message || error);
  process.exit(1);
}
