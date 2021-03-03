import {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Login from './components/login/login'
import Register from './components/register/register'
import Footer from './components/footer/footer'
import UserHistory from './components/userhistory/userhistory'
import Auth from './utils/auth'
import UserContext from './context/usercontext'
import {fetchUser} from './utils/helper'


const App = () => {

    const [user, updateUser] = useState(null)

    useEffect(() => {
        if(Auth.isAuthenticated()) {
            fetchUser().then(data => {
                updateUser(data)
            })
        }
    }, [])

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Navbar auth={Auth.isAuthenticated()}/>
                <Switch>
                    {Auth.isAuthenticated() && <Route exact path="/" component={Home} />}
                    {Auth.isAuthenticated() && <Route exact path="/history" component={UserHistory} />}
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;
