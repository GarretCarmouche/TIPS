import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import { useState } from 'react';
import axios from "../axios";
import CustomerProfile from "./CustomerProfile";
import globalVariable from "./global";

const READER_API_URL = "/getCustomerFromCardID"; // API endpoint for retrieving customer data from server

const RFIDread = () => {

    const [error, setError] = useState(null); // State variable for handling errors
    const [success, setSuccess] = useState(null); // State variable for indicating successful customer retrieval
    const [inputValue, setInput] = useState(''); // State variable for storing input value

    function handleInputChange (event) {
        // Update the state with the input value
        const inputValue = event.target.value;
        // Check if input value has more than 10 digits
        if (inputValue.length <= 9) {
            setInput(inputValue);
        }
    }

    function handleSave (event) {
        event.preventDefault(); // Prevent form submission
        // Access the saved input data from state
        // Do something with the input data, e.g. send it to a server
        console.log('Input value:', inputValue);

        axios.get(READER_API_URL, {
            params: {
                cardID: inputValue
            }
        })
            .then(response => {
                console.log(response.data);
                // Handle response data
                var data = parseInt(response.data);

                if(data == -1) {
                    setError( "RFID Tag is not linked to any customer") ; // Set error state if customer data not found
                    setInput('');
                } else {
                    setSuccess( true); // Set success state if customer data found
                    globalVariable.customerID = data;
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
                    <>
                        {success ? (
                            <section>
                                <div className="App">
                                    <div className="App-background">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h2> <em> Customer Found! </em></h2>
                                        <div>
                                            <Link className='button' to="/customer-profile"> Go to Customer Profile </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <div>
                                <Route path="/RFIDread">
                                    <div className="App">
                                        <div className='App-background'>
                                            <img src={logo} className="App-logo" alt="logo" />
                                            <h1> RFID Tag Identifier </h1>
                                            <form onSubmit={handleSave}>
                                                <input autoFocus={true}
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
