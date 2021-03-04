import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../../utils/auth'
import UserContext from '../../context/usercontext'

const Navbar = ({auth}) => {

    const user = useContext(UserContext)

    const logout = (e) => {
        e.preventDefault()
        Auth.logout(window.location.assign('/'))
    }

    return(
        <nav className="navbar__container">
            <div className="navbar__logo"><Link to="/">Web Scraper</Link></div>
            {
                (auth && user !== null)
                    ?
                        <div className="navbar__username">
                            <div className="navbar__username--dropdown">
                                {user.firstname} {user.lastname}
                            </div>
                            <div className="dropdown-content">
                                <a href="/history">History</a>
                                <a href="/#" onClick={logout}>Logout</a>
                            </div>
                        </div>
                    : null
            }
        </nav>
    )
}

export default Navbar
