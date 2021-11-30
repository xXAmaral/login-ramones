import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Header = () => {

    const [categorias,getCategorias] = useState ([]);

    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria').then((response) => {
            //console.log(response.data);
            getCategorias(response.data)
        })
    },[]);

    return (
        <>
            <div className="container-fluid navbar navbar-expand-lg menu-desktop pb-0 pt-0">
                <div className="container-lg">
                    <div className="row w-100">
                        <div className="col-6">                     
                            <div className="row">
                                <div className="col-4 w-auto nav-top pe-0">                     
                                    <Link to="/" className="nav-link"><i className="bi bi-whatsapp"></i> (44) 9 9999-9999</Link>
                                </div>
                                <div className="col-4 w-auto nav-top pe-0">
                                    <Link to="/" className="nav-link"><i className="bi bi-telephone-fill"></i> (44) 3623-3623</Link>
                                </div>
                                <div className="col-4 w-auto nav-top">
                                    <Link to="/" className="nav-link"><i className="bi bi-envelope-fill"></i> contato@casadavitrine.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">                     
                            <div className="row">
                                <div className="col-4 w-auto nav-top ms-auto">
                                    <Link to="/sobre" className="nav-link">Política de Privacidade</Link>
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
            <div className="container-fluid navbar navbar-expand-lg navbar-light bg-light menu-desktop">
                <div className="container-lg">
                    <div className="row w-100">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 mt-auto mb-auto">
                            <Link to="/" className="navbar-brand">
                                <img className="img-fluid" src={logo}></img>
                            </Link>
                        </div>
                        <div className="col-6 col-sm-5 col-md-4 col-lg-5 mt-auto mb-auto">
                            <form method="get" action="/search" autocomplete="on" className="navbar-form form-inline my-2 my-lg-0" role="search">                       
                                <div className="input-group">
                                    <input name='q' type="text" placeholder="Pesquisar" className="form-control mr-sm-2 pesquisa" aria-label="Pesquisar"></input>
                                    <button className="btn btn-outline-secondary btn-lg my-2 my-sm-0 botao-pesquisa" type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-3 col-sm-4 col-md-5 col-lg-4 mt-auto mb-auto">
                            <ul className="navbar-nav ms-auto flex-row float-end">
                                <li className="nav-item mt-auto mb-auto">
                                    <Link to="/vitrine" className="nav-link">Vitrine</Link>
                                </li>
                                <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                    <Link to="/sobre" className="nav-link">Quem Somos</Link>
                                </li>
                                <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                    <Link to="/contato" className="nav-link">Contato</Link>
                                </li>
                                <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                    <Link to="/Cadastrar" className="nav-link">Anunciar</Link>
                                </li>
                                <li className="nav-item fs-3 mt-auto mb-auto ms-3 ms-lg-0">
                                    <Link to="/carrinho" className="nav-link"><i className="bi bi-cart"></i></Link>
                                </li>
                                <li className="nav-item fs-3 mt-auto mb-auto ms-3 ms-lg-0">
                                    <Link to="/login" className="nav-link"><i className="bi bi-person-circle"></i></Link>
                                </li>
                            </ul>  
                        </div>
                    </div>                        
                </div>    
            </div>
            <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark menu-desktop">
                <div className="container-lg">
                    <div className="row w-100">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 mt-auto mb-auto">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">                 
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle nav-link-cor2" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Todos as Categorias</a>
                                    <ul class="dropdown-menu">
                                        { categorias.map((item,index) => (
                                            <li className="nav-item">
                                                <Link to={"/categoria/"+item.id} className="nav-link">{item.categoria}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul> 
                        </div>

                        <div className="col-9 col-sm-9 col-md-9 col-lg-9 mt-auto mb-auto">
                            <div>
                                <ul className="navbar-nav mt-auto mb-auto flex-row">
                                    { categorias.map((item,index) => (
                                        <li className="nav-item ms-3 ms-lg-0">
                                            <Link to={"/categoria/"+item.id} className="nav-link nav-link-cor2">{item.categoria}</Link>
                                        </li>
                                    ))}
                                </ul>     
                            </div>
                        </div>                 
                    </div>                    
                </div>
            </nav>

            <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light menu-mobile">
                <div className="container-lg ">
                    <div class="row w-100">                    
                        <div className="col-2 col-sm-2 col-md-2 m-auto">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                                <span 
                                className="navbar-toggler-icon">
                                </span>
                            </button>
                        </div>
                        <div className="col-7 col-sm-8 col-md-7 mt-auto mb-auto text-center">
                            <Link to="/" className="navbar-brand">
                                <img className="img-fluid" src={logo}></img>
                            </Link>
                        </div>
                        <div className="col-3 col-sm-2 col-md-3 m-auto">
                            <ul className="nav navbar-nav me-auto flex-row">
                                <li className="nav-item fs-2 ms-auto">
                                    <Link to="/carrinho" className="nav-link"><i className="bi bi-cart"></i></Link>
                                </li>
                                <li className="nav-item fs-2 ms-auto">
                                    <Link to="/sobre" className="nav-link"><i className="bi bi-person-circle"></i></Link>
                                </li>
                            </ul>
                        </div>                
                    </div>                
                    <div className="collapse navbar-collapse" id="menu">                                   
                        <div className="col-9 col-sm-12">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">  
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Início</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Vitrine</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/sobre" className="nav-link">Quem Somos</Link>
                                </li>                                       
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Todos as Categorias</a>
                                    <ul class="dropdown-menu p-2">
                                        { categorias.map((item,index) => (
                                            <li className="nav-item">
                                                <Link to={"/categoria/"+item.id} className="nav-link">{item.categoria}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contato" className="nav-link">Contato</Link>
                                </li> 
                            </ul> 
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export const Footer = () => {

    const [categorias,getCategorias] = useState ([]);

    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria').then((response) => {
            //console.log(response.data);
            getCategorias(response.data)
        })
    },[]);

    return (
        <>
            <footer className="bg-light pt-3 mt-5">
                    <div className="container-lg">
                        <div className="row w-100">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mt-auto mb-auto">
                                <Link to="/" className="navbar-brand">
                                    <img className="img-fluid" src={logo}></img>
                                </Link>
                            </div>

                            <div className="col-9 col-sm-9 col-md-9 col-lg-9 mt-auto mb-auto">                     
                                <div className="row">
                                    <div className="col-4 w-auto ms-auto">
                                        <ul className="navbar-nav mt-auto mb-auto ms-auto flex-row">
                                            <li className="nav-item ms-3 ms-lg-0">
                                                <Link to="/sobre" className="nav-link"><i className="bi bi-whatsapp"></i></Link>
                                            </li>
                                            <li className="nav-item ms-3 ms-lg-0">
                                                <Link to="/sobre" className="nav-link"><i className="bi bi-envelope-fill"></i></Link>
                                            </li>
                                            <li className="nav-item ms-3 ms-lg-0">
                                                <Link to="/sobre" className="nav-link"><i className="bi bi-whatsapp"></i></Link>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>                 
                        </div>                    
                    </div>
                <div className="container-fluid bg-light menu-desktop">
                    <div className="container-lg">
                        <div className="row w-100">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mt-5">
                                <h5>CONTATO</h5>
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link"><i className="bi bi-house-door-fill"></i> CASA DAS VITRINES<br/>CNPJ: 00.000.000/0001-10</Link>
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link"><i className="bi bi-whatsapp"></i> (44) 9 9999-9999</Link>   
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link"><i className="bi bi-telephone-fill"></i> (44) 3623-3623</Link>
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link"><i className="bi bi-envelope-fill"></i> contato@casadavitrine.com</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mt-5">
                                <h5>CATEGORIAS</h5>
                                <ul class="navbar-nav d-flex flex-column flex-wrap listagem">                                      
                                    { categorias.map((item,index) => (
                                        <li className="nav-item">
                                            <Link to={"/categoria/"+item.id} className="nav-link p-0">{item.categoria}</Link>
                                        </li>
                                    ))}
                                    
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 5</Link>   
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 6</Link>   
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 7</Link>   
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 8</Link>
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 9</Link>
                                    </li>
                                    <li className="nav-item ms-3 ms-lg-0">
                                        <Link to="/" className="nav-link p-0">Categoria 10</Link>
                                    </li>
                                </ul> 
                            </div>
                            <div className="col-3 col-sm-4 col-md-5 col-lg-3 mt-5">
                                <h5>INFORMAÇÕES</h5>
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item mt-auto mb-auto">
                                        <Link to="/vitrine" className="nav-link p-0">Vitrine</Link>
                                    </li>
                                    <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                        <Link to="/sobre" className="nav-link p-0">Quem Somos</Link>
                                    </li>
                                    <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                        <Link to="/contato" className="nav-link p-0">Contato</Link>
                                    </li>
                                    <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                        <Link to="/politica" className="nav-link p-0">Política de Privacidade</Link>
                                    </li>
                                </ul>  
                            </div>
                            <div className="col-3 col-sm-4 col-md-5 col-lg-3 mt-5">
                                <h5>MINHA CONTA</h5>
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                        <Link to="/carrinho" className="nav-link p-0"><i className="bi bi-cart"></i> Lista de Desejos</Link>
                                    </li>
                                    <li className="nav-item mt-auto mb-auto ms-3 ms-lg-0">
                                        <Link to="/login" className="nav-link p-0"><i className="bi bi-person-circle"></i> Entrar/Registrar</Link>
                                    </li>
                                </ul>  
                            </div>
                        </div>                        
                    </div>    
                </div>
                <div className="container-fluid navbar-dark bg-dark menu-desktop pt-3 pb-3 mt-5">
                    <div className="container-lg">
                        <div className="row w-100">                           
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-auto mb-auto">                               
                                <p className="text-center text-light mb-0">
                                    <span>Copyright © 2021</span> - Desenvolvido por: <strong>Andrey, Lucas e Gustavo</strong>
                                </p>                                                             
                            </div>                 
                        </div>                    
                    </div>
                </div>
            </footer>
        </>
    )
}

export const formataValor = (valor) => {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}