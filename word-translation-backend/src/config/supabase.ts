import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import Schema from "models/schema";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const supabase = createClient<Schema>(
  process.env.SUPABASE_PROJECT_URL || "",
  process.env.SUPABASE_PRIVATE_KEY || ""
);

export { supabase };