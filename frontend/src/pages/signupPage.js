import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const SignupPage = () =>{
    return (
        <div className="App">
            <div className='App-background'>
                <p> you have reached the sign up page </p>
                <div>
                  <Link className="back-button" to="/"> back </Link> 
                </div> 
            </div>
        </div>
    );
}

export default SignupPage;