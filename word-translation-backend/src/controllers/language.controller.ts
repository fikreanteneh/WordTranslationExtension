import { Request, Response } from "express";
import handleResponsesAndErrors from "../middlewares/handleResponsesAndErrors";
import { autoInjectable } from "tsyringe";
import LanguageService from "../services/language.service";

@autoInjectable()
export default class LanguageController {
  service;
  constructor(service?: LanguageService) {
    this.service = service;
  }

  post = handleResponsesAndErrors(async (req: Request, res: Response) => {
    return this.service?.post(req.body);
  });

  delete = handleResponsesAndErrors(async (req: Request, res: Response) => {
    const { Language } = req.params
    return this.service?.delete({ Language });

  });
  get = handleResponsesAndErrors(async (req: Request, res: Response) => {
    return this.service?.get();
  });
}
