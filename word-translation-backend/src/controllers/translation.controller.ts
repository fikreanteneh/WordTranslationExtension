import { Request, Response } from "express";
import handleResponsesAndErrors from "../middlewares/handleResponsesAndErrors";
import { autoInjectable } from "tsyringe";
import TranslationService from "../services/translation.service";

@autoInjectable()
export default class TranslationController {
  service;
  constructor(service?: TranslationService) {
    this.service = service;
  }

  post = handleResponsesAndErrors(async (req: Request, res: Response) => {
    return this.service?.post(req.body);
  });

  put = handleResponsesAndErrors(async (req: Request, res: Response) => {
    const { Id } = req.params;

    return this.service?.put(req.body, +Id);
  });

  delete = handleResponsesAndErrors(async (req: Request, res: Response) => {
    const { Id } = req.params;
    return this.service?.delete(+Id);
  });

  get = handleResponsesAndErrors(async (req: Request, res: Response) => {
    const translation = {
      Word: (req.query.Word as string) ?? "",
      Language: (req.query.Language as string) ?? "",
      TranslatedLanguage: (req.query.TranslatedLanguage as string) ?? "",
    };
    return this.service?.get(translation);
  });
}
