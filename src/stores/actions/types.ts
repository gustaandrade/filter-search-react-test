import { Vehicle } from "../../types";

export enum StoreActionTypes {
  SET_VEHICLES = "SET_VEHICLES",
}

export interface SetVehicles {
  type: StoreActionTypes.SET_VEHICLES;
  vehicles: Vehicle[];
}

export type StoreActions = SetVehicles;
