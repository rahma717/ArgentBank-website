import './UserPage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userInfo } from '../redux/slice/user.slice';
import Account  from '../components/Accounts/Account';

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
  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)

  const user = useSelector(store => store.user)


  const navigate = useNavigate()

  useEffect(() => { 
    if (!token) {
    return navigate("/login");
   }
     const getUserInfo = async() => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    const user = await response.json()
    dispatch(userInfo(user.body))
    console.log(user)
  }
    getUserInfo()
  }, [token, navigate, dispatch])




  return (
    <>
   <Header/>
   <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br /> {user.firstName} {user.userName}!</h1>
          <Link className="edit-button" to="/edit-username">Edit Name</Link>
          
        </div>
        <h2 className="sr-only">Accounts</h2>
        {data.map((account, index) => (
          <Account key={index} account={account} />
        ))}
      </main>
   <Footer/>
    
    </>
  );
}

export default UserPage;