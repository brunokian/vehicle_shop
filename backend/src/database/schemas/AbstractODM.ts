import { Schema, Model, models, model } from "mongoose";

abstract class AbstractODM<T> {
    protected schema: Schema;
    protected model: Model<T>;
    protected modelName: string

    constructor(modelSchema: Schema, modelName: string) {
        this.schema = modelSchema;
        this.modelName = modelName
        this.model = models[this.modelName] || model(this.modelName, this.schema)
    }

    public async create(obj: T): Promise<T> {
        return this.model.create(obj)
    }

    public async getAll() {
        return this.model.find()
    }

    public async getById(id: string) {
        const result = await this.model.findById(id)

        return result
    }

    public async deleteAll() {
        try {
            const result = this.model.deleteMany({});
            console.log("All files deleted");
            return result           
        } catch (error) {
            console.log(error);
            
        }
    }
 }

export default AbstractODM;