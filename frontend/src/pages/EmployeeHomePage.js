import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import CustomerProfile from './CustomerProfile';
import KeyboardInput from "./RFIDcreate";
import KeyboardInput2 from "./RFIDread";

const EmployeeHomePage = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/employee-home">
                    <div className="App">
                        <div className='App-background'>
                            <h1> RFID Tag Identifier </h1>
                            <div>
                                <Link className='button' to="/RFIDread"> Tag Reader </Link>
                                <Link className='button' to="/RFIDcreate"> Tag Creator </Link>
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
                <Route path="/customer-profile">
                    <KeyboardInput/>
                </Route>
                <Route path="/RFIDread">
                    <KeyboardInput2/>
                </Route>
            </Switch>
        </Router>
    );
}

export default EmployeeHomePage;