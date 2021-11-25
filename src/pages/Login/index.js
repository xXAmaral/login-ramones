import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { BtnDefault } from "../../components/styled";
import { AreaLogin } from './styled';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    <AreaLogin>
                        <h1>Crie sua conta</h1>

                        <form>
                            <div className="form-imput">
                                <label>Nome</label>
                                <input type="user" />
                            </div>
                            <div className="form-imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Cadastrar!</BtnDefault>

                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>

                        <form>
                            <div className="form-imput">
                                <label>Nome</label>
                                <input type="user" />
                            </div>
                            <div className="form-imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/registrar">Registre-se</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}