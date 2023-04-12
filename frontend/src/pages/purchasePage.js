import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import EmployeeHomePage from './EmployeeHomePage';

const PurchasePage = () =>{  
        return (
            <Router>
                <Switch>
                    <Route path="/purchase">
                        <div className="App">
                         <div className="App-background">
                            <p>You have reached the purchase page</p>
                         </div>
                        </div>
                    </Route>
                    <Route path="/employee-home">
                        <EmployeeHomePage />
                    </Route>
                </Switch>      
            </Router>
        );
    }
export default PurchasePage;