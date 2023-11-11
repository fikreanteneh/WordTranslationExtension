import { SupabaseResponse } from "models/Response";
import Translation from "models/translation.model";
import { injectable } from "tsyringe";
import { supabase } from "../config/supabase";
import BaseError from "../errors/baseError";
import { TranslationValidate } from "../validation/translation.validation";

@injectable()
export default class TranslationService {
  get = async (body: any): Promise<Translation | null> => {
    console.log(body);
    const response: SupabaseResponse<Translation | null> = await supabase
      .from("Translation")
      .select("*")
      .eq("Word", body.Word)
      .eq("Language", body.Language)
      .eq("TranslatedLanguage", body.TranslatedLanguage)
      .single();
    console.log(response);
    return response.data;
  };

  put = async (body: any, Id: number): Promise<null> => {
    // validate body
    const validation = TranslationValidate.validateSync(body);
    if (!validation) throw new BaseError("Validation Error", 422);

    // check if record exist
    const prevData: SupabaseResponse<Translation> = await supabase
      .from("Translation")
      .select("*")
      .eq("Id", Id)
      .single();
    console.log(prevData);
    if (!prevData.data) throw new BaseError("Record Not Found", 404);

    // check if updated record is unique
    const prevData2 = await this.get({
      Word: body.Word,
      Language: body.Language,
      TranslatedLanguage: body.TranslatedLanguage,
    });
    if (prevData2) throw new BaseError("Record Already Exist", 422);

    // update record
    const response: SupabaseResponse<null> = await supabase
      .from("Translation")
      .update(body)
      .eq("Id", Id);
    if (response.error) throw new BaseError("Something Went Wrong", 500);
    return response.data;
  };

  post = async (body: any): Promise<null> => {
    // validate body
    const validation = TranslationValidate.validateSync(body);
    if (!validation) throw new BaseError("Validation Error", 422);
    // check if record exist
    const prevData: any = await this.get({
      Word: body.Word,
      Language: body.Language,
      TranslatedLanguage: body.TranslatedLanguage,
    });
    console.log(prevData);

    console.log("===================");
    if (prevData) throw new BaseError("Record Already Exist", 422);

    // insert record
    const response: SupabaseResponse<null> = await supabase
      .from("Translation")
      .insert([body]);
    if (response.error) throw new BaseError("Something Went Wrong", 500);
    return response.data;
  };

  delete = async (Id: number): Promise<null> => {
    // check if record exist
    const prevData: SupabaseResponse<Translation> = await supabase
      .from("Translation")
      .select("*")
      .eq("Id", Id)
      .single();
    if (!prevData.data) throw new BaseError("Record not found", 404);

    // delete record
    const response: SupabaseResponse<null> = await supabase
      .from("Translation")
      .delete()
      .eq("Id", Id);
    if (response.error) throw new BaseError("Something Went Wrong", 500);
    return response.data;
  };
}
