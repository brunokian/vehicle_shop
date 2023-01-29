import mongoose from "mongoose";
import AbstractODM from "./AbstractODM"
import ICar from "../../interfaces/ICar";

// const CarSchema = new mongoose.Schema({
//     model: {
//         type: String,
//         required: true,
//     },
//     manufacturer: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     buyValue: {
//         type: String,
//         required: true,
//         select: false,
//     },
//     doorsQty: {
//         type: Number,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// })

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