import { Box, Stack,rem, TextInput, Group, MultiSelect, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent, useContext, useState } from "react";
import { IPokemonList, PokemonContextData } from "../../stateManagement/PokemonContextData";
import PokemonList from "../pokemonList-component/PokemonList";
import { useQuery } from "react-query";
import {fetchCategoryData, fetchSelectedPokemonList} from '../../api/pokemon/pokemon.query';
import { useIntersect } from "../../hooks/home/useIntersect";

const Home = ()=>{

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

    const handleSelect = async (values: string[]) => {
        setSelectedValues(values)
        if (values.length > 0) {
          const promises = values.map((value) => fetchSelectedPokemonList(value.toLowerCase()))
          const pokemonLists = await Promise.all(promises)
          const mergedPokemonList = useIntersect(pokemonLists)
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

    return(
        <Stack>
            <Group mt={100} px={70} py={20} gap="lg">
                <Box>
                    <TextInput
                        radius="xs"
                        size="md"
                        w={rem(600)}
                        value={searchText}
                        onChange={handleChange}
                        leftSectionPointerEvents="none"
                        placeholder="Search for your favorite pokemon..."
                        leftSectionWidth={42}
                        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                    />
                </Box> 
                <MultiSelect
                    placeholder="Filter by Pokemon Category/type"
                    w={rem(300)}
                    data={categoryData}
                    value={selectedValues}
                    onChange={handleSelect}
                    searchable
                    nothingFoundMessage="Nothing found..."
                />
            </Group>
        
            {error ? (
                <Text ta="center" c="red">
                No Pokémon found !
                </Text>
            ) : (
                <PokemonList 
                    pokemonList={displayedList} 
                />
            )}
            
        </Stack>
    )
}

export default Home