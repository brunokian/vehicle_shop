import VehicleDomain from "./VehicleDomain";
import ICar from "../interfaces/ICar"

class CarDomain extends VehicleDomain {
    protected doorsQty: number

    constructor(car: ICar) {
        super(car);
        this.doorsQty = car.doorsQty;
    }

    public getDoorsQty() {
        return this.doorsQty;
    }

    public setDoorsQdy(doorsQty: number) {
        this.doorsQty = doorsQty;
    }
}

export default CarDomain;