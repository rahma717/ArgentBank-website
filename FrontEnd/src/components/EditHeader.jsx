import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./EditHeader.css";


function EditHeader() {
    const username = useSelector(store => store.user.userName)
    return (
        
        <nav className="main-nav">
            <div className='main-nav-left'>
            <NavLink to="/" className= "main-nav-logo">
              <img
                  className="main-nav-logo-image" src="./images/secondLogo.png" alt="Argent Bank Logo"/>
            </NavLink>
                <h1 className="sr-only">Argent Bank</h1>
             </div>
            <div className="main-nav-right">
                <NavLink className="main-nav-item" href="./user">
                {username}
                <i className="fa fa-user-circle sign-in-icon"></i>
                </NavLink>
                <NavLink className="main-nav-item" to="/">
                <i className="fa fa-gear"></i>
                </NavLink>
                <NavLink className="main-nav-item" to="/">
                <i className="fa fa-power-off"></i>
                </NavLink>
            </div>
        </nav>
       
    );
}

export default EditHeader;