import MotoService from "../Services/MotoService";
import { Response, Request } from "express";

class MotoController {
    private motoService: MotoService;
    private req: Request;
    private res: Response;

    constructor(req: Request, res: Response) {
        this.motoService = new MotoService();
        this.req = req;
        this.res = res;
    }

    public async create() {
        try {
            const result = await this.motoService.create(this.req.body);
            return this.res.status(201).json(result)
        } catch (error) {
            return this.res.status(400).json({ message: error.message })
        }
    }
    public async getAll() {
        try {
            const result = await this.motoService.getAll()
            return this.res.status(200).json(result)
        } catch (error) {
            return this.res.status(400).json({ message: 'foi??' })
        }
    }
    public async getById() {
        try {
            const { id } = this.req.params
            const result = await this.motoService.getById(id)
            return this.res.status(200).json(result)
        } catch (error) {
            return this.res.status(404).json({ message: error.message })
        }
    }
    public async getType() {
        try {
            const { id } = this.req.params
            const result = await this.motoService.getType(id)
            
            return this.res.status(200).json(result)
        } catch (error) {
            return this.res.status(404).json({ message: error.message })
        }
    }

    public async deleteAll() {
        try {
            const result = await this.motoService.deleteAll()
            return this.res.status(200).json(result)
        } catch (error) {
            return this.res.status(404).json({ message: error.message })
        }
    }
}

export default MotoController;