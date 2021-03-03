import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Auth from '../../utils/auth'
import UserContext from '../../context/usercontext'

const Navbar = ({auth}) => {

    const user = useContext(UserContext)

    const logout = () => {
        Auth.logout(window.location.assign('/'))
    }

    return(
        <nav className="navbar__container">
            <div className="navbar__logo"><Link to="/">Web Scraper</Link></div>
            {
                (auth && user)
                    ?
                        <div className="navbar__username">
                            <div className="navbar__username--dropdown">
                                {user.user.firstname} {user.user.lastname}
                            </div>
                            <div className="dropdown-content">
                                <Link to="/history">History</Link>
                                <Link to='#' onClick={logout}>Logout</Link>
                            </div>
                        </div>
                    : null
            }
        </nav>
    )
}

export default Navbar
