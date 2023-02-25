import IVehicle from "../interfaces/IVehicle"

class VehicleDomain {
    protected id: string;
    protected model: string;
    protected manufacturer: string;
    protected buyValue: number;

    constructor(vehicle: IVehicle) {
        this.id = vehicle.id
        this.model = vehicle.model
        this.manufacturer = vehicle.manufacturer
        this.buyValue = vehicle.buyValue
    }

    public setId(id: string) {
        this.id = id;
      }
    
      public getId() {
        return this.id;
      }
    
      public setModel(model: string) {
        this.model = model;
      }
    
      public getModel() {
        return this.model;
      }

      public setManufacturer(manufacturer: string) {
        this.manufacturer = manufacturer
      }

      public getManufacturer() {
        return this.manufacturer
      }

      public setBuyValue(buyValue: number) {
        this.buyValue = buyValue;
      }
    
      public getBuyValue() {
        return this.buyValue;
      }
}

export default VehicleDomain;