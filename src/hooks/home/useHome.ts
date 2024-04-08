import { ChangeEvent, useContext, useState } from "react";
import { IPokemonList, PokemonContextData } from "../../stateManagement/PokemonContextData";

import { useQuery } from "react-query";
import {fetchCategoryData, fetchSelectedPokemonList} from '../../api/pokemon/pokemon.query';

export const useHome = ()=>{
    const {pokemonList} = useContext(PokemonContextData)
    const [searchText,setSearchText] = useState('')
    const [searchedPokemonList,setSearchedPokemonList] = useState<IPokemonList[]>([])
    const [selectedValues,setSelectedValues] = useState<string[]>([])
    const [selectedPokemonList,setSelectedPokemonList] = useState<IPokemonList[]>([])
    const [error, setError] = useState(false)

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value)
        const list = selectedPokemonList.length>0 ? selectedPokemonList : pokemonList
        const filteredList = list.filter(pokemon => 
            pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setSearchedPokemonList(filteredList)
        setError(e.target.value.length > 0 && filteredList.length === 0);
    }

    const intersect = (arrays: IPokemonList[][]) => {
        if (arrays.length === 0) return []
        return arrays.reduce((accumulator, currentArray) => {
          return accumulator.filter((pokemon) =>
            currentArray.some((p) => p.name === pokemon.name)
          )
        })
      }

    const handleSelect = async (values: string[]) => {
        setSelectedValues(values)
        if (values.length > 0) {
          const promises = values.map((value) => fetchSelectedPokemonList(value.toLowerCase()))
          const pokemonLists = await Promise.all(promises)
          const mergedPokemonList = intersect(pokemonLists)
          setSelectedPokemonList(mergedPokemonList)
          setError(mergedPokemonList.length===0)
        } else {
          setSelectedPokemonList([])
          setError(false)
        }
      }

    const {data:categoryData} = useQuery({
        queryFn : ()=>fetchCategoryData(),
        queryKey : ["categoryData"],
      })

      const displayedList = searchText.length > 0 ? 
                            searchedPokemonList : 
                            selectedPokemonList.length > 0 ? 
                            selectedPokemonList : pokemonList

    return{
        searchText,
        handleChange,
        handleSelect,
        categoryData,
        displayedList,
        selectedValues,
        error
    }
}