import MotoODM from "../database/schemas/MotoODM";
import IMoto from "../interfaces/IMoto";
import AbstractService from "./AbstractService";

class MotoService extends AbstractService<IMoto> {
    private motoModel: MotoODM

    constructor() {
        super(MotoODM, 'Moto')
        this.motoModel = new MotoODM()
    }

    async getType(id) {
        const moto = await this.motoModel.getById(id)
            
        const type = moto!.type
        
        return type
    }
}

export default MotoService;