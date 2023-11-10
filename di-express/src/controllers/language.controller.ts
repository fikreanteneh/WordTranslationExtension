import { autoInjectable } from "tsyringe";
import { Request, Response } from "express";
import LanguageService from "../services/language.service";

@autoInjectable()
export default class LanguageController {
  service;
  constructor(service?: LanguageService) {
    this.service = service
  }

  post = async (req: Request, res: Response) => {

    console.log("============Post==============");
    res.status(200).json(req.body);
    // const resource = await this.service.post(req.body);
    // res.send(resource);
  };

  delete = async (req: Request, res: Response) => {
    console.log("============Delete==============");
    res.status(200).json(req.body);
    // const { id } = req.params;
    // const resource = await this.service.delete(id);
    // res.send(resource);
  };

  get = async (req: Request, res: Response) => {
    console.log("============GEt==============");
    res.status(200).json(req.body);
    // const resource = await this.service.put(req.body);
    // res.send(resource);
  };
}
