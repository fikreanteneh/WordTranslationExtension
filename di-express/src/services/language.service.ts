
import * as Model from "../models";
import {prisma, supabase} from "../config/supabase";
import { injectable } from "tsyringe";

@injectable()
export default class LanguageService {
  // constructor(model?: UserModel) {
  //   super(model);
  // }

  get = async (data: Model.Language) => {
    const resourse = await prisma.language.findMany()
    return resourse;
  };


  post = async (data: Model.Translation) => {
    const resourse = await prisma.language.create({
      data: {
        ...data,
      },
    });
    return resourse;
  };

  delete = async (data: Model.Translation) => {
    const resourse = await prisma.language.delete({
      where: {
        Language: data.Language,
      },
    });
    return resourse;
  };
}
