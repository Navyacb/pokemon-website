import { IPokemonList } from "../../stateManagement/PokemonContextData"

export const useIntersect = (arrays: IPokemonList[][]) => {
    if (arrays.length === 0) return []
    return arrays.reduce((accumulator, currentArray) => {
      return accumulator.filter((pokemon) =>
        currentArray.some((p) => p.name === pokemon.name)
      )
    })
  }