import { MantineProvider } from '@mantine/core';
import {QueryClient, QueryClientProvider } from 'react-query';
import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PokemonContextData } from '../../src/stateManagement/PokemonContextData';
import { pokemonList } from '../../src/api/pokemon/apiMock/pokemonAPIMock';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

export const TestComponentWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <PokemonContextData.Provider value={{pokemonList: pokemonList.results}}>
                {children}
                </PokemonContextData.Provider>
            </BrowserRouter>
            </QueryClientProvider>
    </MantineProvider>
  );
};
