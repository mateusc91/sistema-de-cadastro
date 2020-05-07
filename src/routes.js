import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/usuario/main/main';
import MostrarTodosUsuarios from './pages/usuario/detalhes/usuarios';
import CriarUsuarioPage from './pages/usuario/criar/criar';
import EditarUsuario from './pages/usuario/editar/editar';



const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/usuarios" component={MostrarTodosUsuarios} />
            <Route path="/criar" component={CriarUsuarioPage} />
            <Route path="/:id" component={EditarUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
