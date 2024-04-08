import { Center, Container, Group, Image, List, ListItem, LoadingOverlay, Stack, Text, Title } from "@mantine/core"
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
        image,
        isFetching
    } = usePokemonDetails()

    return(
        <Container size="responsive" mt={100} px={70} py={20}>
            <Link to="/" className="textDecoration" >Back to Pokemon List</Link>
            <LoadingOverlay visible={isFetching} />
            {!isFetching &&
            <>
                <Group gap="xl" justify="center" mt={20}>
                    <Title order={3} c='#504848'>{name?.toUpperCase()}</Title>
                    <Image src={image} alt="PokemonImag" w={100} h={100} />
                    <Stack>
                        <Text>HEIGHT : {height}</Text>
                        <Text>WEIGHT : {weight}</Text>
                    </Stack>
                </Group>
                <Group gap="xl" justify="center" mt={20}>
                    <Stack px={15}>
                        <Text fw={500}>ABILITIES</Text>
                        <List>
                            {
                                abilities?.map((pokemon:{ability:{name:string,url:string},is_hidden:boolean,slot:number},index:number)=>{
                                    return <ListItem key={index}>{pokemon?.ability?.name}</ListItem>
                                })
                            }
                        </List>
                    </Stack>
                    <Stack>
                        <Text fw={500}>TYPES</Text>
                        <List>
                            {
                                types?.map((pokemon:{slot:number,type:{name:string,url:string}},index:number)=>{
                                    return <ListItem key={index}>{pokemon?.type?.name}</ListItem>
                                })
                            }
                        </List>
                    </Stack>
                </Group>
                <Center mt={20}>
                    <Text fw={500}>STAT GRAPH</Text>
                    <ReactApexChart options={state.options} series={state.series} type="bar" width="500" />
                </Center>
            </>}
        </Container>
    )
}

export default PokemonDetails;