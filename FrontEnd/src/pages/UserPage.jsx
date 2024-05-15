import './UserPage.css'; // Importation des styles CSS spécifiques à la page UserPage
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate pour la navigation
import Header from '../components/Header'; // Importation du composant Header
import Footer from '../components/Footer'; // Importation du composant Footer
import { useSelector } from 'react-redux'; // Importation du hook useSelector pour accéder à l'état Redux
import { useEffect } from 'react'; // Importation du hook useEffect pour les effets secondaires
import { Link } from 'react-router-dom'; // Importation du composant Link pour créer des liens de navigation
import { useDispatch } from 'react-redux'; // Importation du hook useDispatch pour envoyer des actions Redux
import { userInfo } from '../redux/slice/user.slice'; // Importation de l'action userInfo du slice user.slice
import Account from '../components/Accounts/Account'; // Importation du composant Account

// Données d'exemple pour les comptes utilisateur
const data = [
    {
        title: 'Argent Bank Checking (x8349)',
        accountNumber: 'x8349',
        amount: '$2,082.79',
        amountDescription: 'Available Balance',
        buttonLabel: 'View transactions',
    },
        {
        title: 'Argent Bank Checking (x8349)',
        accountNumber: 'x8349',
        amount: '$10,928.42',
        amountDescription: 'Available Balance',
        buttonLabel: 'View transactions',
    },
        {
        title: 'Argent Bank Checking (x8349)',
        accountNumber: 'x8349',
        amount: '$184.30',
        amountDescription: 'Available Balance',
        buttonLabel: 'View transactions',
    }
]

const UserPage = () => {
  const dispatch = useDispatch(); // Initialisation du hook useDispatch pour envoyer des actions Redux
  const token = useSelector(store => store.auth.token); // Récupération du token d'authentification depuis l'état Redux
  const user = useSelector(store => store.user); // Récupération des informations utilisateur depuis l'état Redux


  const navigate = useNavigate()// Initialisation du hook useNavigate pour la navigation
// Effet pour vérifier si l'utilisateur est connecté et récupérer les informations utilisateur
  useEffect(() => { 
    if (!token) {
    return navigate("/login");// Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
   }
     const getUserInfo = async() => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    const user = await response.json()// Récupération des informations utilisateur depuis la réponse de l'API
    dispatch(userInfo(user.body)) // Envoi des informations utilisateur à l'état Redux via l'action userInfo
    console.log(user)// Affichage des informations utilisateur dans la console (à des fins de débogage)
  }
    getUserInfo()  // Appel de la fonction pour récupérer les informations utilisateur
  }, [token, navigate, dispatch]); // Dépendances de l'effet (token, navigate et dispatch)




    // Rendu de la page utilisateur
  return (
    <>
   <Header/> {/* Affichage du composant Header */}
   <main className="main bg-dark">
        <div className="header">
          {/* Affichage du titre de bienvenue et du nom d'utilisateur */}
          <h1>Welcome back<br /> {user.firstName} {user.userName}!</h1>
          {/* Bouton pour éditer le nom d'utilisateur avec un lien vers la page d'édition */}
          <Link className="edit-button" to="/edit-username">Edit Name</Link>
          
        </div>
        <h2 className="sr-only">Accounts</h2>
        {/* Affichage des comptes utilisateur à partir des données d'exemple */}
        {data.map((account, index) => (
          <Account key={index} account={account} />
        ))}
      </main>
   <Footer/>{/* Affichage du composant Footer */}
    
    </>
  );
}

export default UserPage;// Exportation du composant UserPage