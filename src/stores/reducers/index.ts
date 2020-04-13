import { StoreInitialState } from "./types";

export const initialState: StoreInitialState = {
  brands: [],
  models: [],
  versions: [],
  vehicles: [],
};

const store = (state = initialState, action: any): any => {};

export default store;
