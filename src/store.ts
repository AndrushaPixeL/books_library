import { applyMiddleware, createStore } from "redux";
import { createReducerFunction } from "immer-reducer";
import thunk from "redux-thunk";

import MyImmerReducer, {
  MyImmerReducerInitialStateInt,
  myImmerReducerInitialState,
} from "./redux/appReducer";

export type GlobalState = MyImmerReducerInitialStateInt;

const reducerFunction = createReducerFunction(
  MyImmerReducer,
  myImmerReducerInitialState
);

export const store = createStore(reducerFunction, applyMiddleware(thunk));
