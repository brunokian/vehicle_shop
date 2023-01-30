import mongoose from "mongoose";
import AbstractODM from "./AbstractODM";
import IMoto from "../../interfaces/IMoto";

class MotoODM extends AbstractODM<IMoto> {
    constructor() {
        const schema = new mongoose.Schema<IMoto> ({
            model: {
                type: String,
                required: true,
                unique: true,
            },
            manufacturer: {
                type: String,
                required: true,
                
            },
            buyValue: {
                type: Number,
                required: true,
            },
        })

        super(schema, 'Motos')
    }
}

export default MotoODM;