import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import Edit from './pages/Edit';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserPage />} />
          <Route path='/edit-username' element={<Edit />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;