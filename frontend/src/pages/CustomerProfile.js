import React from "react";
import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import EmployeeHomePage from "./EmployeeHomePage";

const CustomerProfile = () =>{
    const history = useHistory();
    return (
        <Router>
          <Switch>
                <Route path="/customer-profile">
                <div className="App">
                    <div className="App-background">
                        <p> you have reached the customer profile page </p>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div> 
                        <div>
                            <Link className="next-button" to="/employee-home"> next </Link> 
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
                <Route path="/employee-home">
                    <EmployeeHomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default CustomerProfile;