import { Request, Response } from "express";
import { autoInjectable, injectable } from "tsyringe";
import BaseService from "../services/base.service";

@injectable()
export default class BaseController{

    service: BaseService<any>
    constructor(service: BaseService<any>){
        this.service = service
    }

    post = async(req: Request, res: Response) => {
        const resource = await this.service.post(req.body)
        res.send(resource)
    }

    delete = async (req: Request, res: Response) => {
        const { id } = req.params
        const resource = await this.service.delete(id)
        res.send(resource)
    }

}