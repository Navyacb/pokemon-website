import axios from "axios";
import { IPokemonList } from "../../stateManagement/PokemonContextData";


export const fetchPokemonList = async()=>{

    const countData = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const count = countData.data.count

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)

    return response.data.results
}

export const fetchCategoryData = async()=>{
    const response = await axios.get('https://pokeapi.co/api/v2/type/')
    return response.data.results.map((type: { name: string }) => type.name.toUpperCase())
}

export const fetchSelectedPokemonList = async (value: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${value}`)
    const data = response.data.pokemon.map((pokemon: { pokemon: IPokemonList }) => pokemon.pokemon)
    return data
}