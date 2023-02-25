import { Response, Request } from "express";
import CarODM from "../database/schemas/CarODM";
import CarService from "../Services/CarServices";

class CarController {
    private carService: CarService;
    private req: Request;
    private res: Response;

    constructor(req: Request, res: Response) {
        this.carService = new CarService();
        this.req = req;
        this.res = res;
    }

    public async create() {
        try {
            const result = await this.carService.create(this.req.body);
            return this.res.status(201).json(result)
        } catch (error) {
            return this.res.status(400).json({ message: error.message })
        }
    }

    public async getAll() {
        try {
            const result = await this.carService.getAll()
            return this.res.status(200).json(result)
        } catch (error) {
            return this.res.status(404).json({ message: error.message })
        }
    }
}

export default CarController