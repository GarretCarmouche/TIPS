import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignupPage2 from './signupPage2';
import logo from '../TIPSlogo.png';
import { useHistory } from 'react-router';

const SignupPage = () =>{
    const history = useHistory();
    return (
        <Router>
          <Switch>
                <Route path="/signup">
                <div className="App">
                    <div className="App-background">
                        <p> you have reached the sign up page </p>
                        <div>
                            <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                        </div> 
                        <div>
                            <Link className="next-button" to="/signup2"> next </Link> 
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
                <Route path="/signup2">
                    <SignupPage2 />
                </Route>
            </Switch>
        </Router>
    );
}

export default SignupPage;