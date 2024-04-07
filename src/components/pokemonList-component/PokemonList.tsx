import { Text, SimpleGrid, Card, CardSection, Image, Center, Pagination } from "@mantine/core";
import { IPokemonList } from "../../stateManagement/PokemonContextData";
import { useGetPokemonImage } from "../../hooks/pokemonList/useGetPokemonImage";
import { useState } from "react";

const PokemonList = ({pokemonList}:any)=>{
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 20

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, pokemonList.length)

    const currentPokemonList = pokemonList.slice(startIndex, endIndex)

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }

    const {imageData} = useGetPokemonImage(pokemonList,currentPage,itemsPerPage)

    return (
        <>
         <SimpleGrid cols={{ base: 1, xs: 4 }} 
                    spacing="lg" 
                    verticalSpacing="lg"
                    mx={{ base: 30, sm: 70 }} 
                        mt={15}
                >   
            {
                currentPokemonList?.map((data:IPokemonList,index:number)=>{

                    return(
                            <Card
                                p="md"  
                                shadow="md" 
                                withBorder 
                                key={index}
                                className="hover"
                            >
                                <CardSection>
                                    <Image src={imageData?imageData[data.name]:''} fit="cover"/>
                                </CardSection>
                                <Center><Text size="lg" fw={500}>{data.name.toUpperCase()}</Text></Center>
                            </Card>
                        )
                    })
            }
            </SimpleGrid>
            <Center my="xl">
                <Pagination
                total={Math.ceil(pokemonList.length / itemsPerPage)}
                value={currentPage}
                onChange={handlePageChange}
                withControls
                />
            </Center>
         </>
    )
}

export default PokemonList