import React, { useState, useEffect } from 'react';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    
  <div>
    <Header></Header>
   <Home></Home>
    
  </div>
  )
  }

export default App;
