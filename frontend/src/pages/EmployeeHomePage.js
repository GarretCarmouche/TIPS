import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import KeyboardInput from "./RFIDread";

const EmployeeHomePage = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/employee-home">
                    <div className="App">
                        <div className='App-background'>
                            <h1> RFID Tag Identifier </h1>
                            <div>
                                <Link className='button' to="/RFIDread"> Scan RFID Tag </Link>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/customer-profile">
                    <KeyboardInput/>
                </Route>
                <Route path="/RFIDread">
                    <KeyboardInput/>
                </Route>
            </Switch>
        </Router>
    );
}

export default EmployeeHomePage;