import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar__container">
            <div className="navbar__logo"><Link to="/">Logo</Link></div>
            <div className="btn-link"><Link to="/login">Login</Link></div>
        </div>
    )
}

export default Navbar