import React from 'react';
import { AppShell, Title } from '@mantine/core';
import RouterLinks from './RouterLinks';
import { useQuery } from 'react-query';
import { PokemonContextData } from './stateManagement/PokemonContextData';
import {fetchPokemonList} from './api/pokemon/pokemon.query';

const App = ()=>{
  
  const {data:pokemonList = []} = useQuery({
    queryFn : ()=>fetchPokemonList(),
    queryKey : ["PokemonList"],
  })

  return (
    <PokemonContextData.Provider value={{pokemonList}}>
    <AppShell>
      <AppShell.Header>
          <Title order={1} p={20}  size="h1" ta="center">POKEMON</Title>
      </AppShell.Header>
      <RouterLinks/>
    </AppShell>
    </PokemonContextData.Provider>
  )
}

export default App
