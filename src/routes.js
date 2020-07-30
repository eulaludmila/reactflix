import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home'
import CadastroVideo from './pages/Cadastro/Video' 
import CadastroCategoria from './pages/Cadastro/Categoria' 


const Routes = () => {
    return(
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cadastro/video" component={CadastroVideo}/>
                <Route path="/cadastro/categoria" component={CadastroCategoria}/>
                <Route component={() => (<h1>Página 404</h1>)}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;