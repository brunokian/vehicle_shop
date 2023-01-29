import CarODM from "../database/schemas/CarODM";
import ICar from "../interfaces/ICar";

class CarService {
    private carModel: CarODM

    constructor() {
        this.carModel = new CarODM();
    }

    async create(car: ICar) {
        const result = await this.carModel.create(car)
        return result
    }

    async getAll() {
        const result = await this.carModel.getAll()
        return result
    }
}

export default CarService;
