import {Route, Switch} from 'react-router-dom';
import { CProducts, CHomePage } from './main/index.js';

const Main = () => {

    return(
        <main>
            <Switch>
                <Route path = "/products" component ={CProducts}/>            
                <Route path = "/" component ={CHomePage} exact/>
                <Route component = { NotFound } exact/>
            </Switch>
        </main>
    )
}


const NotFound = () => {
    return(
        <div className="smallMargin">
            <h3>UUUps 404 not found page</h3>
        </div>
    )
}
export default Main;