import { Model } from "mongoose";
import AbstractODM from "../database/schemas/AbstractODM";
import ICar from "../interfaces/ICar";

abstract class AbstractService<M> {
    protected model: AbstractODM<M>
    protected modelName: string

    constructor(model: new() => AbstractODM<M>, modelName: string) {
        this.model = new model(),
        this.modelName = modelName
    }

    async create(obj: M) {
        const result = await this.model.create(obj)
        return result
    }

    async getAll() {
        const result = await this.model.getAll()
        return result
    }

    async getById(id) {
        const result = await this.model.getById(id)
        return result
    }
}

export default AbstractService;