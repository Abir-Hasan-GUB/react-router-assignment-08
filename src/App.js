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
import PostDetails from './Componants/PostDetails/PostDetails';


function App() {

  return (
    <div>
      <Router>
        <Switch>

          <Route path="/home">
            <Header/>
            <Home/>
          </Route>

          <Route path="/info">
          <NoMatch/>
          </Route>

          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>

          <Route  path="/post/:id">
            <PostDetails/>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
