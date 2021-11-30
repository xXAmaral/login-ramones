import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export const Login = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/registrar">
                    
                        <h1>Crie sua conta</h1>

                        <form className="footerLogin">
                            <div className="form-imput">
                                <label>Nome</label>
                                <input type="user" />
                            </div>
                            <div className="form-imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <Link to="*" className="cadastrar" type="button">Cadastrar!</Link>

                        </form>
                    
                </Route>
                <Route exact path="*">
                    
                        <h1>Faça login em sua conta</h1>

                        <form className="footerLogin">
                            <div className="form-imput">
                                <label>Nome</label>
                                <input type="user" />
                            </div>
                            <div className="form-imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <Link to="/home-admin" className="entrar" type="button">Entrar</Link>

                            <div>
                                Não tem uma conta?
                                <Link to="/registrar" className="registrese" tupe="button"> Registre-se </Link>
                            </div>
                        </form>
                    
                </Route>
            </Switch>
        </BrowserRouter>
    );
}