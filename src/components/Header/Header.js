import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import './Header.css';


const Header = () => {
    const { user } = useAuthContext();

    let userNavigation = (
        <>
            <li><Link className="nav-link" to="/deals">My deals</Link></li>
            <li><Link className="nav-link" to="/create">Create Card</Link></li>
            {/* <li><Link className="nav-link" to="/testimonial">Testimonial</Link></li> */}
        </>
    );

    let guestAuthNavigation = (
        <>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/register">Register</Link></li>
        </>

    );

    let userAuthNavigation = (
        <>
            <span>Welcome, {user.email}</span>
            <li><Link className="nav-link" to="/logout">Logout</Link></li>
        </>
    );

    return (
        <header className="top-header">
            <nav className="navbar header-nav navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand" ><img src="images/logo.png" alt="image" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
                        aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                        <ul className="navbar-nav">
                            <li><Link className="nav-link active" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/donate">Donate</Link></li>
                            {/* <li><Link className="nav-link" to="/wish">Wish</Link></li> */}
                            {user.email ? userNavigation : ''}
                            <li><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                        <ul className="navbar-nav">
                            {user.email
                                ? userAuthNavigation
                                : guestAuthNavigation
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;