import IMoto from "../interfaces/IMoto";
import VehicleDomain from "./VehicleDomain";

class MotoDomain extends VehicleDomain{
    protected type: string;

    constructor(moto: IMoto) {
        super(moto)
        this.type = moto.type
    }

    public setType(type: string) {
        this.type = type
    }

    public getType() {
        return this.type
    }
}