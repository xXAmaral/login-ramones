import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Sobre } from './pages/Sobre'
import { Home } from './pages/Home'
import { Videos } from './pages/Videos'

import { Header, Footer } from './components/Main'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/videos' component={Videos}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}