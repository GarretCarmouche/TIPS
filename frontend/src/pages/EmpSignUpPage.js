import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';
import EmployeeLogin from './EmployeeLogin';
import { useHistory } from 'react-router';

const EmpSignUpPage = () =>{
    const history = useHistory();
    return (
        <Router>
          <Switch>
                <Route path="/employee-signup">
                <div className="App">
                    <div className="App-background">
                        <p> Create an Employee Account </p>
                        <div class= "form-group">
                            <label for="employeeName">Name:</label>
                            <input
                                type="text"
                                name="employeeName"
                                class="form-control"
                                id="employeeName" />
                        </div>
                        <div class= "form-group">
                            <label for="employeeEmail">Email:</label>
                            <input
                                type="text"
                                name="employeeEmail"
                                class="form-control"
                                id="employeeEmail" />
                        </div>
                        <div class= "form-group">
                            <label for="employeePassword">Password:</label>
                            <input
                                type="password"
                                name="employeePassword"
                                class="form-control"
                                id="employeePassword" />
                        </div>
                        <div class= "form-group">
                            <label for="employeePin">4-digit Pin:</label>
                            <input
                                type="password"
                                name="employeePin"
                                class="form-control"
                                id="employeePin" />
                        </div>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div> 
                        <div>
                            <Link className="next-button" to="/employee-login"> next </Link> 
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
                            <Link className="button" to="/employee-login"> log in </Link> 
                            <Link className="button" to="/employee-signup"> sign up </Link>
                        </div>     
                        </div>
                    </div>
                </Route>
                <Route path="/employee-login">
                    <EmployeeLogin />
                </Route>
            </Switch>
        </Router>
    );
}

export default EmpSignUpPage;