
import { NavLink,} from 'react-router-dom';
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
        {token && <p>connecté</p>}
        {!token && <p>non connecté</p>}
        <h1 className="sr-only">Argent Bank</h1>
      <div>
      <NavLink to="/user" className="main-nav-item" >
      
      </NavLink>
      <NavLink to="/login" className="main-nav-item" >
      <i className="fa fa-user-circle"></i>
            Sign In
      </NavLink>
    
       {/* <button>
       <i className="fa fa-sign-out"></i>
        Button
       </button> */}
      </div>
    </nav>
  );
}

export default Navbar;