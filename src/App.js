import React, { useState } from 'react';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components 
import Navbar from './components/Navbar';
import Iconbar from './components/Iconbar';

// Screens 
import Landing from './screens/Landing';
import PhotographerProfile from './screens/PhotographerProfile';
import LocationScreen from './screens/Location';
import BecomePhotographer from './screens/BecomePhotographer';
import HelpCenter from './screens/HelpCenter';
import Register from './screens/Register';
import Login from './screens/Login';
import Cart from './screens/Cart';
import UserProfile from './screens/UserProfile';


// Basic Styling
require('./App.css')

const App = () => {
  const [user, setUser] = useState({});

  
  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`)};
    }
    
    const handleSignOut = (e) => {
      setUser({})
      console.log(document.getElementById("signInDiv"))
      notify('signed out')
      // document.getElementById("signInDiv").hidden = false;
    }
    
  return (
    <Router> 
      <Navbar handleSignOut={handleSignOut} user={user}/>
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>
      <Iconbar />
      <Routes>
        <Route path='/' element={<Landing notify={notify}/>} />
        <Route path='/login' element={<Login user={user} setUser={setUser} notify={notify}/>}/>
        <Route path='/register' element={<Register user={user} setUser={setUser}/>} />
        <Route path='/photographer/:id' element={<PhotographerProfile />} exact />
        <Route path='/location/:id' element={<LocationScreen />} exact />
        <Route path='/becomephotographer' element={<BecomePhotographer />} exact />
        <Route path='/helpcenter' element={<HelpCenter />} exact />
        <Route path='/cart' element={<Cart />} exact />
        <Route path='/profile/:id' element={<UserProfile />} exact />

      </Routes>
    </Router>
  );
}

export default App;
