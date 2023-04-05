import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Entry from './entryPage';
import HomePage from './homePage';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';

const LoginPage = () => {
    const history = useHistory();
    return (
        <Router>
          <Switch>
                <Route path="/login">
                <div className="App">
                    <div className="App-background">
                        <p> you have reached the login page </p>
                        <div>
                            <Link to="/employee-entry"> employee login </Link> 
                        </div>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div> 
                        <div>
                            <Link className="next-button" to="/home"> next </Link> 
                        </div>
                    </div>     
                </div> 
                </Route>
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
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/employee-entry">
                    <Entry/>
                </Route>
            </Switch>
        </Router>
    );
};

export default LoginPage;