import { combineReducers, createStore } from "redux";
import { ReducerProduct } from "./reducers/reducerProduct";

export const store = createStore(
  combineReducers({
    product: ReducerProduct,
  })
);
