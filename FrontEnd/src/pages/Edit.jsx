import  { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Edit.css';
import Footer from '../components/Footer';
import EditHeader from '../components/EditHeader';
import Account from '../components/Accounts/Account';


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


export default function Edit() {
    
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.user);
    const [newUsername, setNewUsername] = useState(user.userName);
    
    console.log(user)
    
    const navigate = useNavigate();
    useEffect (() => {
   if (!token) {
    return navigate("/login");
   }
}, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            return navigate("/user")
            

            
        } else {
            throw new Error("Error updating user info");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const handleCancelClick = () => {
    setNewUsername("");
};


    return (
        <>
        <div>
        <EditHeader/>
        </div>
        <main>
            
            <h2>Edit user info </h2>
            <form onSubmit={handleSubmit} className="edit-form">
            <div className="input-group">
                <label htmlFor='newUsername'>User name: </label>
                <input type="text" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}
                />
                </div>
                <div className="input-group">
                <label>First name: </label>
                <input type="text" id="firstname" value={user.firstName} disabled
                />
                </div>
                <div className="input-group">
                <label >Last name: </label>
                <input type="text" id="lastName" value={user.lastName} disabled
                />
                </div>
                <div className="button-container">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button" onClick={handleCancelClick} >Cancel</button>
                </div>
            </form>
                {data.map((account, index) => (
          <Account key={index} account={account} darkMode={true} />
        ))}
           
        </main>
        <Footer/>

        </>
    );
}