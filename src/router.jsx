import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Dashboard } from './admin/pages/Dashboard';
import { Cadastrar } from './pages/Cadastrar';
import { Categoria } from './pages/Categoria';
import { Produto } from './pages/Produto';
import { Carrinho } from './pages/Carrinho';
import { Finalizar } from './pages/Finalizar';
import { Contato } from './pages/Contato';
import { Sobre } from './pages/Sobre';
import { Vitrine } from './pages/Vitrine';
import { Login } from './admin/pages/Login';
import { Erro } from './pages/Erro';
import { Politica } from './pages/Politica';


import { Header, Footer } from "./components/Main";

export const Routes = () =>  {
    return(
        <BrowserRouter>
            <Header></Header>
            <div className="container">
                <Switch>
                    <Route path={['/','/home']} exact component={Home}></Route>
                                <Route path={'/admin'} exact component={Dashboard}></Route>
                    <Route path={'/vitrine'} exact component={Vitrine}></Route>
                    <Route path={'/cadastrar'} exact component={Cadastrar}></Route>
                    <Route path={'/carrinho'} exact component={Carrinho}></Route>
                    <Route path={'/finalizar'} exact component={Finalizar}></Route>
                    <Route path={'/login'} exact component={Login}></Route>
                    <Route path={['/categoria', '/categoria/:id']} exact component={Categoria}></Route>
                    <Route path={['/produto', '/produto/:id']} exact component={Produto}></Route>
                    <Route path={'/contato'} exact component={Contato}></Route>
                    <Route path={'/sobre'} exact component={Sobre}></Route>
                    <Route path={'/politica'} exact component={Politica}></Route>
                    <Route path='*' exact component={Erro}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </BrowserRouter>

    )
}