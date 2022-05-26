import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import pokemonReducer from "./pokemon.reducer";

const reducers = combineReducers({
  bank: bankReducer,
  pokemon: pokemonReducer,
});

export default reducers;

export type ReducersState = ReturnType<typeof reducers>;
