import {Link} from 'react-router-dom'

const Navbar = ({auth}) => {
    return(
        <div className="navbar__container">
            <div className="navbar__logo"><Link to="/">Web Scraper</Link></div>
            {
                (auth)
                    ? <div>Username</div>
                    : null
            }
        </div>
    )
}

export default Navbar