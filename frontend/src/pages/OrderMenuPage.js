import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CustomerProfile from './CustomerProfile';
import { useHistory } from 'react-router';

const OrderMenuPage = () =>{
    const history = useHistory();
    
    return (
        <Router>
            <Switch>
                <Route path="/order-menu">
                    <div className="App">
                        <div className='App-background'>
                            <h1> Add to Order </h1>
                            <div> 
                            <button className='button'> Margarita </button>
                            <button className='button'> Frozen Drink </button>
                            <button className='button'> Long Island Iced Tea </button>
                            <button className='button'> Specialty Cocktail </button>
                            <button className='button'> Imported Beer </button>
                            <button className='button'> Gin and Tonic </button>
                            <button className='button'> Whiskey Sour </button>
                            <button className='button'> Domestic Beer </button>
                            <button className='button'> House Wine </button>
                            <button className='button'> Rum and Coke </button>
                            <button className='button'> Bloody Mary </button>
                            <button className='button'> Vodka </button>
                            <button className='button'> Tequila </button>
                            <button className='button'> Whiskey </button>
                            <button className='button'> Gin </button>
                            <button className='button'> Rum </button>
                            <button className='button'> Gin </button>
                            <button className='button'> Water </button>
                            <button className='button'> Soda </button>
                            </div> 
                            <div>
                                <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                            </div>
                            <div>
                                <Link className="next-button" to="/customer-profile"> next </Link> 
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

export default OrderMenuPage;