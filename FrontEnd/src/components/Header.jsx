import { NavLink } from 'react-router-dom';


function Header() {
    return (
        
        <nav className="main-nav">
            <NavLink to="/" className= "main-nav-logo">
              <img
                  className="main-nav-logo-image" src="./images/argentBankLogo.webp" alt="Argent Bank Logo"/>
            </NavLink>
                <h1 className="sr-only">Argent Bank</h1>
            <div>
                <NavLink className="main-nav-item" href="./user.html">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </NavLink>
                <NavLink className="main-nav-item" to="/">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
        </nav>
       
    );
}

export default Header;