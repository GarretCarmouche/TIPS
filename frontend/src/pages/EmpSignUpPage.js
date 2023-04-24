import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import EmployeeLogin from './EmployeeLogin';
import { useHistory } from 'react-router';
import globalVariable from "./global";
import axios from "../axios";
import { useState, useEffect } from 'react';
import App from '../App';


const EMPLOYEE_ADD_API_URL = "/barAdd";


const EmpSignUpPage = () =>{
    const history = useHistory();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [customerNameInput, setName] = useState('');
    const [customerPhoneInput, setPhone] = useState('');
    const [customerPasswordInput, setPassword] = useState('');
    const [customerEmailInput, setEmail] = useState('');
    const [customerPinInput, setPin] = useState('');



    useEffect(() => {
        setError('');
    }, [customerNameInput, customerPasswordInput, customerEmailInput, customerPhoneInput])

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handlePinChange(event) {
        setPin(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log("Name:", customerNameInput);
        // console.log("Password:", customerPasswordInput);

        axios.get(EMPLOYEE_ADD_API_URL, {
            params: {
                employeeName: customerNameInput,
                employeePhone: customerPhoneInput,
                employeeEmail: customerEmailInput,
                employeePassword: customerPasswordInput,
                employeePin: customerPinInput
            }
        })
        .then(function (response) {
            var data = response.data;

            if(data == false) {
                setError("Employee account could not be created!");
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
                <Route path="/employee-signup">
                        {success ? (
                            <section>
                                <div className="App">
                                    <div className="App-background">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h2> <em> Your account has been created successfully! </em></h2>

                                        <div>
                                            <Link className='button' to="/"> Go Back </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : (
                <div className="App">
                    <div className="App-background">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2> <em> Create Account </em> </h2>
                        <div >
                        <form onSubmit={handleSubmit} className="form-group">
                                        {/* Conditionally render the error message */}
                                        {error && <div class="input--error">{error}</div>}

                                        <label>Enter Name:
                                            <input
                                                type="text"
                                                name="username"
                                                value={customerNameInput}
                                                onChange={handleNameChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter Email:
                                            <input
                                                type="text"
                                                name="email"
                                                value={customerEmailInput}
                                                onChange={handleEmailChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter Password:
                                            <input
                                                type="password"
                                                name="password"
                                                value={customerPasswordInput}
                                                onChange={handlePasswordChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter Phone Number (XXXXXXXXXX):
                                            <input
                                                type="text"
                                                name="phone"
                                                value={customerPhoneInput}
                                                onChange={handlePhoneChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter 4 digit pin:
                                            <input
                                                type="text"
                                                name="pin"
                                                value={customerPinInput}
                                                onChange={handlePinChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <div class="align--stuff">
                                            <input class="submit--button" type="submit"/>
                                        </div>
                                    </form>
                        </div>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div>
                    </div>
                </div>
                )}
            </Route>

            <Route path="/">
                <App>
                </App>
            </Route>
            </Switch>
        </Router>
    );
}

export default EmpSignUpPage;