import MotoODM from "../database/schemas/MotoODM";
import IMoto from "../interfaces/IMoto";
import AbstractService from "./AbstractService";

class MotoService extends AbstractService<IMoto> {
    constructor() {
        super(MotoODM, 'Moto')
    }
}

export default MotoService;