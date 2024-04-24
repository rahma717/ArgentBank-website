/* eslint-disable react/prop-types */

function Account({ account, darkMode = false }) {
    const { title, accountNumber, amount, amountDescription, buttonLabel} = account
    return (
        <section className={`account ${darkMode ? 'dark' : ''}` }>
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} ({accountNumber})</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                {darkMode ? <p>Fleche</p> : <button className="transaction-button">{buttonLabel}</button>}
            </div>
        </section>
    );
}


export default Account;