import { StoreInitialState } from "./types";
import { StoreActions, StoreActionTypes } from "../actions/types";

export const initialState: StoreInitialState = {
  brands: [],
  models: [],
  versions: [],
  vehicles: [],
};

const store = (
  state = initialState,
  action: StoreActions
): StoreInitialState => {
  switch (action.type) {
    case StoreActionTypes.SET_VEHICLES:
      return {
        ...state,
        vehicles: action.vehicles,
      };

    default:
      return state;
  }
};

export default store;
