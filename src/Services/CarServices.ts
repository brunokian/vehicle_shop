import CarODM from "../database/schemas/CarODM";
import ICar from "../interfaces/ICar";
import AbstractService from "./AbstractService";

class CarService extends AbstractService<ICar> {
    constructor() {
        super(CarODM, 'Car')
    }
}

export default CarService;
