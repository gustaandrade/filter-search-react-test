import { StoreActions, StoreActionTypes } from "./types";
import { Vehicle } from "../../types";

export const setVehicles = (vehicles: Vehicle[]): StoreActions => ({
  type: StoreActionTypes.SET_VEHICLES,
  vehicles,
});
