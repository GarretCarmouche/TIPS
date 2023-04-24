import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeeLogin from './EmployeeLogin';
import HomePage from './homePage';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from "../axios";
import CustomerProfile from "./CustomerProfile";
import globalVariable from "./global";


const CUSTOMER_API_URL = "/getCustomerLogin";

const RFIDread = () => {
    const history = useHistory();
    const [inputs, setInputs] = useState("");

    const userRef = useRef();
    const [customerEmailInput, setEmail] = useState('');
    const [customerPasswordInput, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [inputValue, setInput] = useState('');

    const handleInputChange = (event) => {
        // Update the state with the input value
        const inputValue = event.target.value;
        // Check if input value has more than 10 digits
        if (inputValue.length <= 9) {
            setInput(inputValue);
        }
    }

   const handleSave = (event) => {
        event.preventDefault(); // Prevent form submission
        // Access the saved input data from stat
        // Do something with the input data, e.g. send it to a server
        console.log('Input value:', inputValue);

        axios.get("/getCustomerFromCardID", {
            params: {
                cardID: inputValue
            }
        })
            .then(response => {
                console.log(response.data);
                // Handle response data
                var data = parseInt(response.data);

                if(data == -1) {
                    setError( "RFID Tag is not linked to any costumer") ;
                } else {
                    setSuccess( true);
                }
            })
            .catch(error => {
                console.log(error);
                // Handle error
            });
    }

    return (
        <Router>
            <Switch>
                <Route path="/RFIDread">
                    <> {success ? (
                        <section>
                            <div className="App">
                                <div className="App-background">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <h2> <em> Customer Found! </em></h2>

                                    <div>
                                        <Link className='button' to="/customer-profile"> Go to Costumer Profile </Link>
                                    </div>

                                </div>
                            </div>
                        </section>
                    ) : (
                        <div>
                            <Route path="/RFIDread">
                                {/* Import and use the RFIDread component here */}
                                <div className="App">
                                    <div className='App-background'>
                                        <h1> RFID Tag Identifier </h1>
                                        <form onSubmit={handleSave}>
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                            />
                                            <p>Input value: {inputValue}</p>
                                            {error && <p>{error}</p>}
                                            <button className='button' type="submit">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </Route>
                        </div>
                    )}
                    </>
                </Route>
                <Route path="/customer-profile">
                    <CustomerProfile></CustomerProfile>
                </Route>
            </Switch>
        </Router>
    );
};

export default RFIDread;