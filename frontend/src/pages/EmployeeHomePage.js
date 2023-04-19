import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import CustomerProfile from './CustomerProfile';

const EmployeeHomePage = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/employee-home">
                    <div className="App">
                        <div className='App-background'>
                            <h1> Current Customers </h1>
                            <div> 
                            <Link className='button' to="/customer-profile"> Sample Customer 1 </Link>
                            <Link className='button' to="/customer-profile"> Sample Customer 2 </Link>
                            <Link className='button' to="/customer-profile"> Sample Customer 3 </Link> 
                            <Link className='button' to="/customer-profile"> Sample Customer 4 </Link>
                            <Link className='button' to="/customer-profile"> Sample Customer 5 </Link>
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
                    <CustomerProfile/>
                </Route>
            </Switch>      
        </Router>
    );
}

export default EmployeeHomePage;