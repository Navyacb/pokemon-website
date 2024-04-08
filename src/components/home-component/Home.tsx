import { Box, Stack,rem, TextInput, Group, MultiSelect, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "../pokemonList-component/PokemonList";
import {useHome} from "../../hooks/home/useHome";

const Home = ()=>{

    const {
        searchText,
        handleChange,
        handleSelect,
        categoryData,
        displayedList,
        selectedValues,
        error
    } = useHome()

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

export default Home;