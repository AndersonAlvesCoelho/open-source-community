import { PokemonConstants } from "../../constants/index"

type Pokemon = {
    name: string
  }

interface GetNamePokemonProps {
    type: PokemonConstants,
    payload?: Pokemon[]
}


export type PokemonType = GetNamePokemonProps;