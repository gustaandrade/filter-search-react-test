export interface Brand {
  id: number;
  name: string;
}

export interface Model {
  makeId: number;
  id: number;
}

export interface Version {
  modelId: number;
  id: number;
  name: string;
}

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  version: string;
  image: string;
  km: number;
  price: string;
  yearModel: number;
  yeatFab: number;
  color: string;
}

export interface SelectOption {
  label: string;
  value: number;
}
