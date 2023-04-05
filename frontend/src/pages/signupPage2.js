import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignupPage from './signupPage';
import HomePage from './homePage';
import { useHistory } from 'react-router';

const SignupPage2 = () =>{
    const history = useHistory();
    return (
        <Router>
            <Switch>
                <Route path="/signup2">
                    <div className="App">
                        <div className='App-background'>
                            <p> sign up - step 2 </p>
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