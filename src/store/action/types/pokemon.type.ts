import { PokemonConstants } from "../../constants/index"

type Pokemon = {
    name: string
  }

interface PokemonProps {
    type: PokemonConstants,
    payload: Pokemon[]
}


export type PokemonType = PokemonProps;