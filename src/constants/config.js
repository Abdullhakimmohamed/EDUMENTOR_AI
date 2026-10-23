// Supabase project settings.
// The anon/publishable key is safe to ship in the client — it is protected by
// row-level security. The mentor runs on local Ollama, not a cloud API key.
export const SUPABASE_URL = "https://ioxydqqpknmoacnxaqhk.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_wC3RmptMd1mZrzqzbnzthg_vrIqDMGl";

// Local mentor. Ollama must be running on this computer.
export const OLLAMA_PORT = 11434;
export const OLLAMA_MODEL = "llama3.2:3b";
