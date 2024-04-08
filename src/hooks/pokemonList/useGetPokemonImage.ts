import { useQuery } from "react-query";
import { IPokemonList } from "../../stateManagement/PokemonContextData";
import { fetching } from "../../api/pokemon/pokemon.query";

export const useGetPokemonImage = (pokemonList?: IPokemonList[], currentPage: number = 1, itemsPerPage: number = 20) => {

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, pokemonList?.length || 0)
  const limitedPokemonList = pokemonList?.slice(startIndex, endIndex)??[]

  const { data: imageData ,isLoading } = useQuery({
    queryKey: limitedPokemonList?.map((pokemon: IPokemonList) => ['pokemonImage', pokemon.url]), 
    queryFn: async () => {
      const imagePromises = limitedPokemonList?.map((pokemon: IPokemonList) => fetching(pokemon.url)) ?? []
      const images = await Promise.all(imagePromises)

      const pokemonImages: { [key: string]: string } = {}
      limitedPokemonList?.forEach((pokemon, index) => {
        pokemonImages[pokemon.name] = images[index]
      })

      return pokemonImages
    },
    enabled: limitedPokemonList !== undefined && limitedPokemonList.length > 0 ,
  })

  return { imageData ,isLoading}
}

