import { PokemonConstants } from "../constants/index";
import { PokemonType } from "../action/types/pokemon.type";

type Pokemon = {
  name: string;
};
interface InitialState {
  loading: boolean;
  pokemon: Pokemon[];
  message: string;
}

const initialState = {
  loading: true,
  pokemon: [],
  message: "",
};

export default function bankReducer(
  state: InitialState = initialState,
  action: PokemonType
): InitialState {
  switch (action.type) {
    case PokemonConstants.POKEMON_REQUEST:
      return { ...state, loading: true };

    case PokemonConstants.POKEMON_SUCCESS:
      console.log("action.payload ", action.payload);
      console.log("action.pokemon ", state.pokemon);
      return { ...state, loading: false, pokemon: action.payload };

    case PokemonConstants.POKEMON_FAILURE:
      return { ...state, loading: false, pokemon: [] };
    default:
      return state;
  }
}
