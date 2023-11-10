import { PrismaClient } from "@prisma/client/edge";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import Schema from "models/schema";
import path from "path";
import { injectable, singleton } from "tsyringe";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const supabase = createClient<Schema>(
  process.env.SUPABASE_PROJECT_URL || "",
  process.env.SUPABASE_PRIVATE_KEY || ""
);

const prisma = new PrismaClient(); 
export { prisma, supabase };