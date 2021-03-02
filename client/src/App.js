import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Login from './components/login/login'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
            {/*<Footer />*/}
        </BrowserRouter>
    )
}

export default App;
