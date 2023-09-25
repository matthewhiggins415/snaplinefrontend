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


// Basic Styling
require('./App.css')

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Iconbar />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path='/landing' element={<Landing/>} exact />
        <Route path='/photographer/:id' element={<PhotographerProfile/>} exact />
        <Route path='/image/:id' element={<ImageDetails/>} exact />
        <Route path='/location/:id' element={<LocationScreen/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
