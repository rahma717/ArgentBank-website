import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';// Importation du hook useSelector de React-Redux pour accéder à l'état Redux
import { useNavigate } from 'react-router-dom';// Importation du hook useNavigate pour la navigation
import './Edit.css';
import Footer from '../components/Footer';
import EditHeader from '../components/EditHeader';
import Account from '../components/Accounts/Account';

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

  
// Composant principal pour l'édition des informations utilisateur
export default function Edit() {
  // Utilisation de useSelector pour récupérer le token d'authentification de l'état Redux
    const token = useSelector((state) => state.auth.token);
// Utilisation de useSelector pour récupérer les informations utilisateur de l'état Redux
    const user = useSelector((state) => state.user);
 // État local pour le nouveau nom d'utilisateur en cours de modification
    const [newUsername, setNewUsername] = useState(user.userName);

    const [error, setErrors] = useState(null);
    
    console.log(user)
// Hook navigate pour la navigation conditionnelle
    const navigate = useNavigate();
// Effet pour rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    useEffect (() => {
   if (!token) {
    return navigate("/login");
   }
}, [token, navigate]);

// Fonction de validation pour le nouveau nom dutilisateur
  const validate = () => {
// Expression régulière pour vérifier que le nom d'utilisateur contient uniquement des lettres et des chiffres
      // eslint-disable-next-line no-useless-escape
      const regex = new RegExp('[a-zA-Z\d.-]+')
     // Vérifie que le nom d'utilisateur est une chaîne de caractères d'au moins 2 caractères et respecte l'expression régulière
    if (typeof newUsername === "string" && newUsername.length >= 2 && regex.test(newUsername)) {
        return true
    }

    setErrors("Username must be at least 2 characters long, and containes only letters and numbers.");
    return false
  };
// Fonction pour soumettre les modifications du nom d'utilisateur
    const handleSubmit = async (e) => {
// Empêche le comportement par défaut du formulaire (rechargement de la page)
        e.preventDefault();
// validation des donées du formulaire
        const validationErrors = validate();
        if (!validationErrors) {
            return;
        }

        try {
            // Envoi de la requête PUT à l'API pour mettre à jour le nom d'utilisateur
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
            // Corps de la requête contenant le nouveau nom d'utilisateur
                body: JSON.stringify({
                    userName: newUsername,
                }),
            });
           // Si la mise à jour est réussie, redirection vers la page utilisateur
        if (response.ok) {
            return navigate("/user");
            
        } else {
             // Gestion des erreurs de mise à jour
            throw new Error("Error updating user info");
        }
    } catch (error) {
         // Affichage de l'erreur dans la console
        console.error("Error:", error);
    }
};
// Fonction pour annuler les modifications du nom d'utilisateur
const handleCancelClick = () => {
    // Réinitialisation du nom d'utilisateur à une chaîne vide
    setNewUsername(user.userName);
};
// Rendu du composant Edit
    return (
        <>
        <div>
        <EditHeader/>
        </div>
        <main>
            <h2>Edit user info </h2>
            {/* Formulaire pour l'édition des informations utilisateur */}
            <form onSubmit={handleSubmit} className="edit-form">
            {error && <p className="error">{error}</p>}
            <div className="input-group">
                <label htmlFor='newUsername'>User name: </label>
                <input type="text" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}
                />
                </div>
                <div className="input-group">
                <label>First name: </label>
             {/* Champ de saisie pour le prénom de famille de l'utilisateur, désactivé car non modifiable */}   
                <input type="text" id="firstname" value={user.firstName} disabled
                />
                </div>
                <div className="input-group">
                <label >Last name: </label>
            {/* Champ de saisie pour le nom de famille de l'utilisateur, désactivé car non modifiable */}
                <input type="text" id="lastName" value={user.lastName} disabled
                />
                </div>
            {/* Boutons pour enregistrer ou annuler les modifications */}
                <div className="button-container">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button" onClick={handleCancelClick} >Cancel</button>
                </div>
            </form>
            {/* Affichage des comptes utilisateur */}
                {data.map((account, index) => (
          <Account key={index} account={account} darkMode={true} />
        ))}
        </main>
        <Footer/>

        </>
    );
}