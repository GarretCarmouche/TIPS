import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignupPage2 from './signupPage2';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';
import globalVariable from "./global";
import axios from "../axios";
import { useState, useEffect } from 'react';


const CUSTOMER_ADD_API_URL = "/customerAdd";


const SignupPage = () =>{
    const history = useHistory();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [customerNameInput, setName] = useState('');
    const [customerPhoneInput, setPhone] = useState('');
    const [customerPasswordInput, setPassword] = useState('');
    const [customerEmailInput, setEmail] = useState('');



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
    function handleSubmit(event) {
        event.preventDefault();
        // console.log("Name:", customerNameInput);
        // console.log("Password:", customerPasswordInput);

        axios.get(CUSTOMER_ADD_API_URL, {
            params: {
                customerName: customerNameInput,
                customerPhone: customerPhoneInput,
                custEmail : customerEmailInput,
                custPass : customerPasswordInput

            }
        })
        .then(function (response) {
            var data = response.data;

            if(data == false) {
                setError("Invalid Input");
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
                <Route path="/signup">
                        {success ? (
                            <section>
                                <div className="App">
                                    <div className="App-background">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h2> <em> You are now logged in! </em></h2>

                                        <div>
                                            <Link className='button' to="/home"> Go to homepage </Link>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        ) : (
                <div className="App">
                    <div className="App-background">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2> <em> Create account </em> </h2>
                        <div >
                        <form onSubmit={handleSubmit} className="form-group">
                                        {/* Conditionally render the error message */}
                                        {error && <div class="input--error">{error}</div>}

                                        <label>Enter name:
                                            <input
                                                type="text"
                                                name="username"
                                                value={customerNameInput}
                                                onChange={handleNameChange}
                                                required
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter password:
                                            <input
                                                type="password"
                                                name="password"
                                                value={customerPasswordInput}
                                                onChange={handlePasswordChange}
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter email:
                                            <input
                                                type="text"
                                                name="email"
                                                value={customerEmailInput}
                                                onChange={handleEmailChange}
                                                />
                                        </label>
                                        <p></p>
                                        <label>Enter phone number (XXXXXXXXXX):
                                            <input
                                                type="text"
                                                name="phone"
                                                value={customerPhoneInput}
                                                onChange={handlePhoneChange}
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
                <Route path="/signup2">
                    <SignupPage2 />
                </Route>
            </Switch>
        </Router>
    );
};

export default SignupPage;