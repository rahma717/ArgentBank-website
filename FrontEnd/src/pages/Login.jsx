
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';// Importation de useState, un hook de gestion de l'état dans React
import { login } from '../redux/slice/auth.slice';// Importation de l'action de connexion depuis Redux
import { useDispatch } from 'react-redux';// Importation de useDispatch, un hook pour accéder au store Redux
import { useNavigate } from 'react-router-dom';// Importation de useNavigate, un hook pour la navigation dans React Router

const Login = () => {
   // Définition d'un état local 'user' avec useState, contenant les champs 'email' et 'password' par défaut
  const [user, setUser] = useState({
    email: "tony@stark.com",
    password: "password123"
  })
 const [error, setError] = useState('');

  // Obtention de la fonction dispatch pour l'envoi d'actions à Redux
  const dispatch = useDispatch()
  // Obtention de la fonction navigate pour la navigation
  const navigate = useNavigate()
  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSubmit = async (e) => {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();
    // Réinitialise l'état d'erreur avant de soumettre
    setError('');

  // Envoi de la requête de connexion avec les données utilisateur au serveur
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    // Convertit l'objet user en chaîne JSON pour l'envoyer dans le corps de la requête
      body: JSON.stringify(user)
    })
  // Récupération des données de la réponse sous forme de JSON
    const data = await response.json()
  // Vérification si la requête est réussie (200 OK)
    if (response.ok) {
  // Dispatch de l'action de connexion avec le token reçu du serveur
      dispatch(login(data.body.token))
  // Redirection vers la page utilisateur après la connexion réussie
      navigate('/user');
    } else {
  // Mise à jour de l'état d'erreur avec un message d'erreur approprié
      setError('invalid email or password');
    }
  };
// Fonction pour mettre à jour l'état local 'user' lors de la modification des champs du formulaire
  const handleChange = (e) => {
    // Met à jour l'état user en copiant les valeurs existantes et en remplaçant la valeur du champ modifié

    setUser({...user, [e.target.name]: e.target.value})
  }
    // Affiche l'état user dans la console pour le débogage
  console.log(user)
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <section className="sign-in-content">
        <div className="flex-container">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          </div>
          {/* Formulaire de connexion avec gestion des événements onSubmit et onChange */}
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
         {/* Champ de saisie pour l'e-mail avec gestion de la valeur et des changements */}
              <input type="text" id="username" name='email' onChange={handleChange} value={user.email}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
         {/* Champ de saisie pour le mot de passe avec gestion de la valeur et des changements */}
              <input type="password" id="password" name='password' onChange={handleChange} value={user.password}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Affichage du message d'erreur si présent */}
            {error && <p className="error-message">{error}</p>}

            {/* Bouton de soumission du formulaire */}
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;