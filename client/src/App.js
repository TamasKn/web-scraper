import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Login from './components/login/login'
import Register from './components/register/register'
import Footer from './components/footer/footer'
import UserHistory from './components/userhistory/userhistory'

const isAuthenticated = false

const App = () => {
    return (
        <BrowserRouter>
            <Navbar auth={isAuthenticated}/>
            <Switch>
                {isAuthenticated && <Route exact path="/" component={Home} />}
                {isAuthenticated && <Route exact path="/history" component={UserHistory} />}
                <Route exact path="/" component={Login} />
                {!isAuthenticated && <Route path="/register" component={Register} />}
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
