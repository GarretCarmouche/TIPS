import logo from './TIPSlogo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signupPage';
//Function names must start with capital letter

function TestApiCalls(endpoint){
  axios.get(endpoint)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <div className="App-background">
                <img src={logo} className="App-logo" alt="logo" />
                <p></p>
                <div>
                  <Link className="button" to="/login"> log in </Link> 
                  <Link className="button" to="/signup"> sign up </Link>
                </div>     
              </div>
            </div>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </Router>
    <div>
    {TestApiCalls('/api/someEndpoint')}
    </div>
  </div>
  );
}

export default App;
