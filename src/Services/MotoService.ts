import MotoODM from "../database/schemas/MotoODM";
import IMoto from "../interfaces/IMoto";

class MotoService {
    private motoModel: MotoODM

    constructor() {
        this.motoModel = new MotoODM();
    }

    async create(moto: IMoto) {
        const result = await this.motoModel.create(moto)
        return result
    }

    async getAll() {
        const result = await this.motoModel.getAll()
        return result
    }
}

export default MotoService;