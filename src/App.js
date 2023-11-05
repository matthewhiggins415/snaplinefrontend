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
import AddScreen from './screens/AddScreen';
import PublicPhotographer from './screens/PublicPhotographer'

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
      localStorage.removeItem("token");
      notify('signed out')
      // document.getElementById("signInDiv").hidden = false;
    }
    
  return (
    <Router> 
      <Navbar handleSignOut={handleSignOut} user={user}/>
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>
      <Routes>
        <Route path='/' element={<Landing notify={notify} user={user}/>} />
        <Route path='/login' element={<Login user={user} setUser={setUser} notify={notify}/>}/>
        <Route path='/register' element={<Register user={user} setUser={setUser} notify={notify}/>} />
        <Route path='/photographer/:id' element={<PhotographerProfile user={user} notify={notify} />} exact />
        <Route path='/public/photographer/:id' element={<PublicPhotographer user={user} notify={notify} />} exact />
        <Route path='/location/:id' element={<LocationScreen />} exact />
        <Route path='/becomephotographer' element={<BecomePhotographer user={user} notify={notify}/>} exact />
        <Route path='/helpcenter' element={<HelpCenter />} exact />
        <Route path='/cart' element={<Cart user={user}/>} exact />
        <Route path='/profile/:id' element={<UserProfile user={user} notify={notify} setUser={setUser}/>} exact />
        <Route path='/add' element={<AddScreen user={user} notify={notify}/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
