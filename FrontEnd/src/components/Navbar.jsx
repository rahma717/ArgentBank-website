
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useSelector } from 'react-redux';

function Navbar() {

  const token = useSelector(store => store.auth.token)
  console.log('navbar', token)
  return (
    <nav className="main-nav">
      <NavLink to="/" className= "main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.jpg"
          alt="Argent Bank Logo"
        />
        </NavLink>
        
        <h1 className="sr-only">Argent Bank</h1>
      <div>
      
      <NavLink to="/login" className="main-nav-item" >
      <i className="fa fa-user-circle"></i>

            Sign In
      </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;