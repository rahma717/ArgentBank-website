/* eslint-disable react/prop-types */ // Désactive temporairement les avertissements ESLint pour les types de props

// Composant fonctionnel Account prenant un objet "account" en tant que prop, avec darkMode par défaut à false
function Account({ account, darkMode = false }) {
    // Destructuration de l'objet "account" pour extraire les propriétés nécessaires
    const { title, accountNumber, amount, amountDescription, buttonLabel } = account;

    // Rendu du composant Account
    return (
        // Section représentant un compte utilisateur, avec une classe 'dark' si darkMode est true
        <section className={`account ${darkMode ? 'dark' : ''}`}>
            {/* Wrapper pour le contenu du compte */}
            <div className="account-content-wrapper">
                {/* Titre du compte avec le titre et le numéro de compte */}
                <h3 className="account-title">{title} ({accountNumber})</h3>
                {/* Montant du compte */}
                <p className="account-amount">{amount}</p>
                {/* Description du montant */}
                <p className="account-amount-description">{amountDescription}</p>
            </div>
            {/* Wrapper pour le contenu d'action (CTA) */}
            <div className="account-content-wrapper cta">
                {/* Affichage d'une flèche droite si darkMode est true, sinon affichage d'un bouton avec le libellé spécifié */}
                {darkMode ? <img src="/images/arrow_right.png" alt="" className="fleche-droite" /> : <button className="transaction-button">{buttonLabel}</button>}
            </div>
        </section>
    );
}

// Exportation du composant Account
export default Account;