import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeeLogin from './EmployeeLogin';
import HomePage from './homePage';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <Router>
          <Switch>
                <Route path="/login">
                <div className="App">
                    <div className="App-background">
                    <img src={logo} className="App-logo" alt="logo" />
                        <h2> <em> Log in </em></h2>

                        <form onSubmit={handleSubmit} className="form-group">
                            <label>Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={inputs.username || ""} 
                                    onChange={handleChange}
                                    required
                                     />
                            </label>
                            <p></p>
                            <label>Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={inputs.password || ""} 
                                    onChange={handleChange}
                                    required
                                     />
                            </label>
                            <p></p>
                            {/*<input type="submit"/>*/}
        
                        </form>

                        <div>
                            <Link className='button' to="/employee-login"> employee login </Link> 
                        </div>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div> 
                        <div>
                            <Link className="next-button" to="/home" > next </Link> 
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
                    <HomePage/> 
                </Route>
                <Route path="/employee-login">
                    <EmployeeLogin/>
                </Route>
            </Switch>
        </Router>
    );
};

export default LoginPage;