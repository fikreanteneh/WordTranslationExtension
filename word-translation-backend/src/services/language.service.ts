import { injectable } from "tsyringe";
import { supabase } from "../config/supabase";
import BaseError from "../errors/baseError";
import { SupabaseResponse } from "../models/Response";
import { LanguageValidate } from "../validation/language.validation";
import Language from "./../models/language.model";

@injectable()
export default class LanguageService {
  get = async (): Promise<Array<Language> | null> => {
    const response: SupabaseResponse<Array<Language>> = await supabase
      .from("Language")
      .select("*");
    return response.data;
  };

  post = async (body: any) => {
    // validate body
    const validation = LanguageValidate.validateSync(body);
    if (!validation) throw new BaseError("Validation Error", 422);

    // check if record exist
    const prevData: SupabaseResponse<Language | null> = await supabase
      .from("Language")
      .select("*")
      .eq("Language", body.Language)
      .single();
    if (prevData.data) throw new BaseError("Record Already Exist", 422);

    // insert record
    const response: SupabaseResponse<null> = await supabase
      .from("Language")
      .insert([body]);
    if (response.error) throw new BaseError("Something Went Wrong", 500);
    return response.data;
  };

  delete = async (body: any) => {
    // check if record exist
    const prevData: SupabaseResponse<Language | null> = await supabase
      .from("Language")
      .select("*")
      .eq("Language", body.Language)
      .single();
    if (!prevData.data) throw new BaseError("Record not found", 404);

    // delete record
    const response: SupabaseResponse<null> = await supabase
      .from("Language")
      .delete()
      .eq("Language", body.Language);
    if (response.error) throw new BaseError("Something Went Wrong", 500);
    return response.data;
  };
}
