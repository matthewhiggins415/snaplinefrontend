import React from 'react';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Notifications
import { ToastContainer, toast } from 'react-toastify'

// Components 
import Navbar from './components/Navbar';
import Iconbar from './components/Iconbar';

// Screens 
import Landing from './screens/Landing';
import PhotographerProfile from './screens/PhotographerProfile';
import ImageDetails from './screens/ImageDetails';
import LocationScreen from './screens/Location';
import BecomePhotographer from './screens/BecomePhotographer';
import HelpCenter from './screens/HelpCenter';
import Register from './screens/Register';
import Login from './screens/Login';


// Basic Styling
require('./App.css')

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Iconbar />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/photographer/:id' element={<PhotographerProfile />} exact />
        <Route path='/image/:id' element={<ImageDetails />} exact />
        <Route path='/location/:id' element={<LocationScreen />} exact />
        <Route path='/becomephotographer' element={<BecomePhotographer />} exact />
        <Route path='/helpcenter' element={<HelpCenter />} exact />
      </Routes>
    </Router>
  );
}

export default App;
