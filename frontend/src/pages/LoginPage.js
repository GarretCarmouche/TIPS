import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeeLogin from './EmployeeLogin';
import RFIDcreate from './RFIDcreate';
import HomePage from './homePage';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "../axios";
import globalVariable from "./global";

const CUSTOMER_API_URL = "/getCustomerLogin";

const LoginPage = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState("");

    const userRef = useRef();
    const [customerEmailInput, setEmail] = useState('');
    const [customerPasswordInput, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        setError('');
    }, [customerEmailInput, customerPasswordInput])

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("Email:", customerEmailInput);
        // console.log("Password:", customerPasswordInput);

        axios.get(CUSTOMER_API_URL, {
            params: {
                customerEmail: customerEmailInput,
                customerPassword: customerPasswordInput
            }
        })
        .then(function (response) {
            var data = parseInt(response.data);

            if(data == -1) {
                setError("Incorrect Email or Password!");
            } else {
                setSuccess(true);
                globalVariable.customerID = data;
                console.log(globalVariable.customerID);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
      }

    return (
        <Router>
          <Switch>
                <Route path="/login">
                    <> {success ? (
                            <section>
                                <div className="App">
                                    <div className="App-background">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h2> <em> You are now logged in! </em></h2>

                                        <div>
                                            <Link className='button' to="/RFIDcreate"> Create your Tag </Link>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        ) : (
                            <div className="App">
                                <div className="App-background">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <h2> <em> Customer Log in </em></h2>
                                    <form onSubmit={handleSubmit} className="form-group">
                                        {/* Conditionally render the error message */}
                                        {error && <div class="input--error">{error}</div>}

                                        <label>Email:
                                            <input
                                                type="text"
                                                name="username"
                                                value={customerEmailInput}
                                                onChange={handleEmailChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Password:
                                            <input
                                                type="password"
                                                name="password"
                                                value={customerPasswordInput}
                                                onChange={handlePasswordChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <div class="align--stuff">
                                            <input class="submit--button" type="submit"/>
                                        </div>
                                    </form>
                                    <div>
                                        <Link className='button' to="/employee-login"> Employee Login </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
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
                <Route path="/RFIDcreate">
                    <RFIDcreate/>
                </Route>
                <Route path="/employee-login">
                    <EmployeeLogin/>
                </Route>
            </Switch>
        </Router>
    );
};

export default LoginPage;