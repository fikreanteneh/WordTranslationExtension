import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

import { Client } from "pg";

const client = new Client({
  host: process.env.SUPABASE_HOST,
  port: Number(process.env.SUPABASE_PORT),
  user: process.env.SUPABASE_USER,
  password: process.env.SUPABASE_PASSWORD,
  database: process.env.SUPABASE_DATABASE,
});

export const connect = async () => {
  try {
    await client.connect();
    console.log("Successfully Connected!");
  } catch (err) {
    console.error("Connection error");
  }
};

export const disconnect = async () => {
  try {
    await client.end();
    console.log("Successfully Disconnected!");
  } catch (err) {
    console.error("Disconnection error");
  }
};
