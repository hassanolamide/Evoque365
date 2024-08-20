
import './App.css';
import Home from './Home';
import Login from './Login/Login';
import Register from './Register';
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbars from './Navbar/Navbars';
import Signup from './Login/Signup';
import Shop from './Shop/Shop.jsx';
import Notification from './Notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import About from './About/About.jsx';
import Collections from './About/Collections/Collections.jsx';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    setShowRegister(true); 

    const unSub = onAuthStateChanged(auth,(users)=>{
      console.log(users)
    })

    return () =>{
      unSub
    }
  }, []);

  return (
    <>
     <BrowserRouter>
     <Navbars/>
      {showRegister && <Register />} 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/collection" element={<Collections/>} />
      </Routes>
    </BrowserRouter>
    <Notification/>
    </>
  );
}


export default App
