import { mongo } from "mongoose";
import { autoInjectable } from "tsyringe";
import mongoose from "../database";
import ModelI from "../interfaces/mode.interface";

export default class BaseService<T>{

    model: mongoose.Model<any, any>
    constructor(model: ModelI){
        this.model = model.model
    }

    post = async (data: T) => {
        const resourse = await this.model.create(data)
        return resourse
    }

    delete = (id: string): void => {
        return this.model.remove({_id: mongoose.Types.ObjectId(id)})
    }

}