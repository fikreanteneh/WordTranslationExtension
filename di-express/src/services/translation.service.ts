import { injectable } from "tsyringe";
import { prisma, supabase } from "../config/supabase";
import * as Model from "../models";

@injectable()
export default class TranslationService {
  // constructor(model?: UserModel) {
  //   super(model);
  // }

  get = async (data: Model.Translation) => {
    const resource = await prisma.translation.findUnique({
      where: {
        Word_Language_TranslatedLanguage: {
          Word: data.Word,
          Language: data.Language,
          TranslatedLanguage: data.TranslatedLanguage,
        },
      },
    });
    return resource;
  };

  put = async (data: Model.Translation) => {
    const resourse = await prisma.translation.put({
      data: {
        ...data,
      },
    });
    return resourse;
  };

  post = async (data: Model.Translation) => {
    const resourse = await prisma.translation.create({
      data: {
        ...data,
      },
    });
    return resourse;
  };

  delete = async (data: Model.Translation) => {
    const resourse = await prisma.translation.delete({
      where: {
        Word: data.Word,
        Language: data.Language,
        TranslatedLanguage: data.TranslatedLanguage,
      },
    });
    return resourse;
  };
}
