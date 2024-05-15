import { NavLink } from 'react-router-dom'; // Importation du composant NavLink pour créer des liens de navigation
import { useSelector } from 'react-redux'; // Importation du hook useSelector pour accéder à l'état Redux
import "./EditHeader.css"; // Importation des styles CSS spécifiques à EditHeader

// Composant fonctionnel EditHeader
function EditHeader() {
    // Récupération du nom d'utilisateur depuis l'état Redux
    const username = useSelector(store => store.user.userName);

    // Rendu du composant EditHeader
    return (
        // Section de navigation principale
        <nav className="main-nav">
            {/* Partie gauche de la barre de navigation */}
            <div className='main-nav-left'>
                {/* Lien vers la page d'accueil avec le logo Argent Bank */}
                <NavLink to="/" className= "main-nav-logo">
                    <img className="main-nav-logo-image" src="./images/secondLogo.png" alt="Argent Bank Logo" />
                </NavLink>
                {/* Titre de la page pour les lecteurs d'écran */}
                <h1 className="sr-only">Argent Bank</h1>
            </div>
            {/* Partie droite de la barre de navigation */}
            <div className="main-nav-right">
                {/* Lien vers la page utilisateur avec le nom d'utilisateur et une icône utilisateur */}
                <NavLink className="main-nav-item" href="./user">
                    {username}
                    <i className="fa fa-user-circle sign-in-icon"></i>
                </NavLink>
                {/* Lien vers la page des paramètres avec une icône de réglages */}
                <NavLink className="main-nav-item" to="/">
                    <i className="fa fa-gear"></i>
                </NavLink>
                {/* Lien vers la page de déconnexion avec une icône de déconnexion */}
                <NavLink className="main-nav-item" to="/">
                    <i className="fa fa-power-off"></i>
                </NavLink>
            </div>
        </nav>
    );
}

export default EditHeader; // Exportation du composant EditHeader