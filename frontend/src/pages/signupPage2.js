import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignupPage from './signupPage';
import HomePage from './homePage';
import { useHistory } from 'react-router';
import globalVariable from "./global";


const SignupPage2 = () =>{
    const history = useHistory();
    return (
        <Router>
            <Switch>
                <Route path="/signup2">
                    <div className="App">
                        <div className='App-background'>
                            <div >
                            
                            <form className= "form-group">
                            <h1> Enter state-issued ID information: </h1>
                                <label> Driver's License number: 
                                    <input
                                        type="number"
                                        />
                                </label>
                                <p></p>
                                <label> Legal name:
                                    <input
                                        type="text"
                                        />
                                    </label>
                                <p></p>
                                <label> Birthdate:
                                    <input 
                                        type="date"
                                    />
                                </label>
                                
                                <h1> Enter payment information: </h1>
                       
                                <label> Credit card number: 
                                    <input
                                        type="number"
                                        />
                                </label>
                                <p></p>              
                                <label> Name on card:
                                    <input
                                        type="text"
                                        />
                                </label>
                                <p></p>              
                                <label> CVV:
                                    <input
                                        type="number"
                                        />
                                </label>
                                <p></p>
                                <label> Expiration date:
                                    <input 
                                        type="date"
                                    />
                                </label>
                            </form>
                            </div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                            <div>
                                <Link className="next-button" to="/home"> next </Link>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route> 
                <Route path="/home">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default SignupPage2;