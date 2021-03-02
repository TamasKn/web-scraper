import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Login from './components/login/login'
import Register from './components/register/register'
import Footer from './components/footer/footer'

const isAuthenticated = false

const App = () => {
    return (
        <BrowserRouter>
            <Navbar auth={isAuthenticated}/>
            <Switch>
                {isAuthenticated && <Route exact path="/" component={Home} />}
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
