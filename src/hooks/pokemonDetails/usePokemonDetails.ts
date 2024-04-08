import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { fetchDetails } from "../../api/pokemon/pokemon.query"

export const usePokemonDetails = ()=>{
    const { name } = useParams()

    const{data:pokemonDetail,isFetching} = useQuery({
        queryFn: ()=>fetchDetails(name?name:''),
        queryKey: ['pokemonDetail']
    })
    
    interface IStatType {base_stat:number,effort:number,stat:{name:string,url:string}}

    const statLabels = pokemonDetail?.stats?.map((stat:IStatType) => stat.stat.name)
    const statValues = pokemonDetail?.stats?.map((stat:IStatType) => stat.base_stat)

    const state = {
        options : {
            chart: {
            id: 'basic-bar',
            },
            xaxis: {
            categories: statLabels,
            },
            color:['#a75858'],
        },
        series : [
            {
            name: 'Base Stats',
            data: statValues,
            },
        ]
    }

    const height = pokemonDetail?.height
    const weight = pokemonDetail?.weight
    const abilities = pokemonDetail?.abilities
    const types = pokemonDetail?.types
    const image = pokemonDetail?.sprites?.other?.showdown?.front_default

    return {
        name,
        state,
        height,
        weight,
        abilities,
        types,
        image,
        isFetching
    }

}