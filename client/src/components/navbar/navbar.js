import {Link} from 'react-router-dom'

const Navbar = ({auth}) => {
    return(
        <nav className="navbar__container">
            <div className="navbar__logo"><Link to="/">Web Scraper</Link></div>
            {
                (auth)
                    ?
                        <div className="navbar__username">
                            <div className="navbar__username--dropdown">
                                Username
                            </div>
                            <div className="dropdown-content">
                                <Link to="/history">History</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        </div>
                    : null
            }
        </nav>
    )
}

export default Navbar
