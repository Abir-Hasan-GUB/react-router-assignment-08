import React, { useState, useEffect } from 'react';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Componants/NoMatch/NoMatch';


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
          <Header></Header>
            <Home></Home>
          </Route>

          <Route exact path="/">
          <Header></Header>
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  
  )
  }

export default App;
