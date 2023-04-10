import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EmployeeHomePage from "./EmployeeHomePage";
import EmpSignUpPage from "./EmpSignUpPage";
import { useHistory } from 'react-router';


const EmployeeLogin = () => {
    const history = useHistory();
    return (
        <Router>
          <Switch>
                <Route path="/employee-login">
                <div className="App">
                    <div className="App-background">
                    <p> Employee Login </p>
                        <div class= "form-group">
                            <label for="empEmail">Email:</label>
                            <input
                                type="text"
                                name="empEmail"
                                class="form-control"
                                id="empEmail" />
                        </div>
                        <div class= "form-group">
                            <label for="empPassword">Password:</label>
                            <input
                                type="text"
                                name="empPassword"
                                class="form-control"
                                id="empPassword" />
                        </div>
                        <div>
                            <button><Link to="/employee-signup"> New Employee? Sign Up Here! </Link></button>
                        </div>
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
                        <div>
                            <Link className="button" to="/employee-login"> employee log in </Link> 
                            <Link className="button" to="/employee-signup"> new employee sign up </Link>
                        </div>     
                        </div>
                    </div>
                </Route>
                <Route path="/employee-home">
                    <EmployeeHomePage />
                </Route>
                <Route path="/employee-signup">
                    <EmpSignUpPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default EmployeeLogin;