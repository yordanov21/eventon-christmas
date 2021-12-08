const Header = () => {
    return (
        <header className="top-header">
            <nav className="navbar header-nav navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
                        aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                        <ul className="navbar-nav">
                            <li><a className="nav-link active" href="#home">Home</a></li>
                            <li><a className="nav-link" href="#wish">Wish</a></li>
                            <li><a className="nav-link" href="#b-deals">Best deals</a></li>
                            <li><a className="nav-link" href="#donate">Donate</a></li>
                            <li><a className="nav-link" href="#testi">Testimonial</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;