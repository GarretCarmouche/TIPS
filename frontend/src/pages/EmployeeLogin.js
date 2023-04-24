import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeeHomePage from "./EmployeeHomePage";
import EmpSignUpPage from "./EmpSignUpPage";
import { useHistory } from 'react-router';
import logo from '../TIPSlogo.png';
import { useState, useEffect, useRef } from 'react';
import axios from "../axios";
import globalVariable from "./global";



const EMPLOYEE_API_URL = "/getEmployeeLogin";

const EmployeeLogin = () => {
    const history = useHistory();
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

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("Email:", customerEmailInput);
        // console.log("Password:", customerPasswordInput);

        axios.get(EMPLOYEE_API_URL, {
            params: {
                employeeEmail: customerEmailInput,
                employeePassword: customerPasswordInput
            }
        })
        .then(function (response) {
            var data = parseInt(response.data);

            if(data == -1) {
                setError("Incorrect Email or Password!");
                
            } else {
                setSuccess(true);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
      }

    return (
        <Router>
          <Switch>
                <Route path="/employee-login">
                <> {success ? (
                        <section>
                        <div className="App">
                            <div className="App-background">
                                <img src={logo} className="App-logo" alt="logo" />
                                <h2> <em> You are now logged in! </em></h2>

                                <div>
                                    <Link className='button' to="/employee-home"> Go to homepage </Link> 
                                </div>

                            </div>     
                        </div> 
                        </section>
                    ) : (
                        <div className="App">
                            <div className="App-background">
                            <img src={logo} className="App-logo" alt="logo" />
                            
                            <h2> <em> Employee Log in </em></h2>
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
                                <Link className='button'  to="/employee-signup"> Employee Sign Up </Link> 
                            </div>
                        </div>     
                        </div>
                    )}
                </>
                 
                </Route>
                <Route path="/employee-signup">
                    <EmpSignUpPage></EmpSignUpPage>
                </Route>
                <Route path="/employee-home">
                    <EmployeeHomePage></EmployeeHomePage>
                </Route>
            </Switch>
        </Router>
    );
};

export default EmployeeLogin;