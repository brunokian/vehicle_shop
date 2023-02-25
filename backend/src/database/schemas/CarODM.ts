import mongoose from "mongoose";
import AbstractODM from "./AbstractODM"
import ICar from "../../interfaces/ICar";


class CarODM extends AbstractODM<ICar> {
    constructor() {
        const schema = new mongoose.Schema<ICar>({
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
            doorsQty: {
                type: Number,
                required: true,
            },
        })
        
        super(schema, 'Cars')
    }
}

export default CarODM;