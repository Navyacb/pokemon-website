import {Routes,Route} from 'react-router-dom';
import { routePath } from './constants/routePath';
import Home from './components/home-component/Home';
import PokemonDetails from './components/pokemonDetails-component/PokemonDetails';

const RouterLinks = ()=>{

    return(
        <Routes>
            <Route>
                <Route path={routePath.home} element={<Home/>}/>
                <Route path={routePath.pokemonDetails} element={<PokemonDetails/>}/>
            </Route>
        </Routes>
    )
}

export default RouterLinks;