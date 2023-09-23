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

// Basic Styling
require('./App.css')

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Iconbar />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path='/' element={<Landing/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
