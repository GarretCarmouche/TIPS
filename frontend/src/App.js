import logo from './TIPSlogo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/signupPage';
import EmployeeHomePage from './pages/EmployeeHomePage';
import CustomerProfile from './pages/CustomerProfile';

const testEndpoint = "https://jsonplaceholder.typicode.com/posts/1";

function App() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(testEndpoint).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

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
            <Route path="/employee-home">
              <EmployeeHomePage />
            </Route>
            <Route path="/customer-profile">
              <CustomerProfile />
            </Route>
          </Switch>
          </div>
      </Router>
      {/* API testing stuff 
      <div>
        <p>{post.title}</p>
      </div>
      */}
  </div>
  );
}

export default App;
