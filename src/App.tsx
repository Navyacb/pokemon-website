import { PokemonContextData } from './stateManagement/PokemonContextData';
import {fetchPokemonList} from './api/pokemon/pokemon.query';
import Header from './components/header/Header';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { useQuery } from 'react-query';
import '@mantine/core/styles.css';

const App = ()=>{
  
  const {data:pokemonList = []} = useQuery({
    queryFn : ()=>fetchPokemonList(),
    queryKey : ["PokemonList"],
  })

  return (
    <MantineProvider>
      <BrowserRouter>
        <PokemonContextData.Provider value={{pokemonList}}>
          <Header/>
        </PokemonContextData.Provider>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App;
