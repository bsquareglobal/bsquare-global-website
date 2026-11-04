// Supabase Edge Function: signs browser uploads without exposing Cloudinary API secret.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const auth = req.headers.get("Authorization") || "";
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorised" }), { status: 401, headers: { ...cors, "Content-Type": "application/json" } });
  const { folder, resource_type } = await req.json();
  const cloud_name = Deno.env.get("CLOUDINARY_CLOUD_NAME")!;
  const api_key = Deno.env.get("CLOUDINARY_API_KEY")!;
  const api_secret = Deno.env.get("CLOUDINARY_API_SECRET")!;
  const timestamp = Math.floor(Date.now() / 1000);
  const safeFolder = ["bsquareglobal/projects", "bsquareglobal/gallery"].includes(folder) ? folder : "bsquareglobal/gallery";
  const toSign = `folder=${safeFolder}&timestamp=${timestamp}${api_secret}`;
  const digest = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(toSign));
  const signature = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
  return new Response(JSON.stringify({ cloud_name, api_key, timestamp, signature, folder: safeFolder }), { headers: { ...cors, "Content-Type": "application/json" } });
});
