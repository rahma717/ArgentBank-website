import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
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
 // Utilisation de useSelector pour récupérer les données de l'état Redux
    const token = useSelector((state) => state.auth.token);
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

// Fonction de validation 
  const validate = () => {
      // eslint-disable-next-line no-useless-escape
      const regex = new RegExp('[a-zA-Z\d.-]+')
    if (typeof newUsername === "string" && newUsername.length >= 2 && regex.test(newUsername)) {
        return true
    }

    setErrors("Username must be at least 2 characters long, and containes only letters and numbers.");
    return false
  };

// Fonction pour soumettre les modifications du nom d'utilisateur
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (!validationErrors) {
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({
                    userName: newUsername,
                }),
            });
           
        if (response.ok) {
            return navigate("/user");
            

            
        } else {
            throw new Error("Error updating user info");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
// Fonction pour annuler les modifications du nom d'utilisateur
const handleCancelClick = () => {
    setNewUsername("");
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