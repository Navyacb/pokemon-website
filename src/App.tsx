import React from 'react';
import { useQuery } from 'react-query';
import { PokemonContextData } from './stateManagement/PokemonContextData';
import {fetchPokemonList} from './api/pokemon/pokemon.query';
import Header from './components/header/Header';

const App = ()=>{
  
  const {data:pokemonList = []} = useQuery({
    queryFn : ()=>fetchPokemonList(),
    queryKey : ["PokemonList"],
  })

  return (
    <PokemonContextData.Provider value={{pokemonList}}>
      <Header/>
    </PokemonContextData.Provider>
  )
}

export default App;
