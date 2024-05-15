
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slice/auth.slice';
import { removeUser } from '../redux/slice/user.slice';

function Navbar() {

  const token = useSelector(store => store.auth.token)
  console.log('navbar', token)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    return dispatch(removeUser())
  }
  return (
    <nav className="main-nav">
      <NavLink to="/" className= "main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        </NavLink>
        
        <h1 className="sr-only">Argent Bank</h1>
      {!token && <div>
      
      <NavLink to="/login" className="main-nav-item" >
      <i className="fa fa-user-circle"></i>

            Sign In
      </NavLink>
      </div>}
                  {token && <div>
                <NavLink className="main-nav-item" href="./user.html">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </NavLink>
                <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
                    <i className="fa fa-sign-out" ></i>
                    Sign Out
                </NavLink>
            </div>}
    </nav>
  );
}

export default Navbar;