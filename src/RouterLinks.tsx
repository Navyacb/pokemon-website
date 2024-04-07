import {Routes,Route} from 'react-router-dom';
import { routePath } from './constants/routePath';
import Home from './components/home-component/Home';

const RouterLinks = ()=>{

    return(
        <Routes>
            <Route>
                <Route path={routePath.home} element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default RouterLinks;