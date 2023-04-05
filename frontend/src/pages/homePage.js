import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from '../TIPSlogo.png';

const HomePage = () =>{
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <div className="App">
                        <div className='App-background'>
                            <h1> home page </h1>
                            <div>
                            <a class="button" href="../" target="_self" rel="noopener noreferrer"> log out </a> 
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
            </Switch>      
        </Router>
    );
}

export default HomePage;