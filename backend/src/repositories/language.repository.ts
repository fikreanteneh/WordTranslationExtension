import { autoInjectable } from "tsyringe";
import mongoose from "../database";
import ModelI from "../interfaces/mode.interface";
import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "config/supabase";
import * as Model from "../models";

export default class LanguageRepository {

  post = async (value: Model.Language) => {
    const { data, error } = await supabase.from("language").insert(value);
    if (error) throw new Error(error.message);
    return data;
  };

  get = async (filters = {}): Promise<T[]> => {
    const { data, error } = await supabase.from("language").insert(value);
    if (error) throw new Error(error.message);
    return data;
  };

  getById = async (id: string): Promise<T> => {
    const { data, error } = await supabase.from("language").insert(value);
    if (error) throw new Error(error.message);
    return data;
  };

  delete = (id: string): void => {
    const { data, error } = await supabase.from("language").insert(value);
    if (error) throw new Error(error.message);
    return data;
  };
}
