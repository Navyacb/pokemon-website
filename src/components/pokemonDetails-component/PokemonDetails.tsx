import { Center, Container, Group, Image, List, ListItem, Stack, Text, Title } from "@mantine/core"
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { usePokemonDetails } from "../../hooks/pokemonDetails/usePokemonDetails";

const PokemonDetails = ()=>{
    const { name,
        state,
        height,
        weight,
        abilities,
        types,
        image
    } = usePokemonDetails()

    return(
        <Container size="responsive" mt={100} px={70} py={20}>
            <Link to="/" className="textDecoration" >Back to Pokemon List</Link>
            <Group gap="xl" justify="center" mt={20}>
                <Title order={3} c='#504848'>{name?.toUpperCase()}</Title>
                <Image src={image} w={100} h={100} />
                <Stack>
                    <Text>Height : {height}</Text>
                    <Text>Weight : {weight}</Text>
                </Stack>
            </Group>
            <Group gap="xl" justify="center" mt={20}>
                <Stack px={15}>
                    <Text>Abilities</Text>
                    <List>
                        {
                            abilities?.map((pokemon:any,index:number)=>{
                                return <ListItem key={index}>{pokemon?.ability?.name}</ListItem>
                            })
                        }
                    </List>
                </Stack>
                <Stack>
                    <Text>Types</Text>
                    <List>
                        {
                            types?.map((pokemon:any,index:number)=>{
                                return <ListItem key={index}>{pokemon?.type?.name}</ListItem>
                            })
                        }
                    </List>
                </Stack>
            </Group>
            <Center mt={20}>
                <Text>Stat Graph</Text>
                <ReactApexChart options={state.options} series={state.series} type="bar" width="500" />
            </Center>
        </Container>
    )
}

export default PokemonDetails;