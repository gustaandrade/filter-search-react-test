import { Brand, Model, Version, Vehicle } from "../../types";

export interface StoreInitialState {
  brands: Brand[];
  models: Model[];
  versions: Version[];
  vehicles: Vehicle[];
}
