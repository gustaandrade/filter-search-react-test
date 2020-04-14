import { Vehicle } from "../types";

export interface CheckboxProps {
  label: string;
  defaultChecked: boolean;
}

export interface SearchBoxProps {
  setVehicles: (vehicles: Vehicle[]) => void;
}

export interface ListProps {
  vehicles: Vehicle[];
}
