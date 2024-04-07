import { createContext } from "react";

export interface IPokemonList{
    name : string,
    url : string,
}

interface IPokemonDataType{
    pokemonList : IPokemonList[],
}


export const PokemonContextData = createContext<IPokemonDataType>({
    pokemonList : [],
})