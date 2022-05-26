import { Dispatch } from "react";
import api from "../../service/api";
import { PokemonConstants } from "../constants";
import { PokemonType } from "./types/pokemon.type";

export const getNamePokemon = () => async (dispatch: Dispatch<PokemonType>) => {
  dispatch({ type: PokemonConstants.POKEMON_REQUEST });
  try {
    const res = await api.get("/pokemon");
    const { results } = res?.data;
    console.log("results ", results);
    dispatch({ type: PokemonConstants.POKEMON_SUCCESS, payload: results });
  } catch (error) {
    // const { response: err } = error;
    // const message = err && err.data ? err.data.message : 'Erro desconhecido';
    console.log("error ", error);

    dispatch({ type: PokemonConstants.POKEMON_FAILURE });
  }
};
