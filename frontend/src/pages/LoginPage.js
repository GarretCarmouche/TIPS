import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="App">
            <div className="App-background">
                <p> you have reached the login page </p>
                <div>
                  <Link className="back-button" to="/"> back </Link> 
                </div> 
            </div>     
        </div> 

    );
};

export default LoginPage;