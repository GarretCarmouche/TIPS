import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profile from '../profile-img.png';
import React, { useState, useEffect } from 'react';
import EmployeeHomePage from './EmployeeHomePage';
import OrderMenuPage from './OrderMenuPage';
import { getCurrentDate } from './utils/getCurrentDate';
import CurrentOrder from './CurrentOrder';
import CheckoutPage from './CheckoutPage';
import globalVariable from "./global";



console.log(getCurrentDate())

const CustomerProfile = () =>{  
        const [orders, setOrders] = useState([]);
        const [isOpen, setIsOpen] = useState(false);
        const history = useHistory();
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        }
    
        return (
            <Router>
                <Switch>
                    <Route path="/customer-profile">
                        <div className="App">
                         <div className="App-background">
                                <img src={logo} className="App-logo" alt="logo" />
                                <div className="purchase-history-table">
                                    <table>
                                        <OrderMenuPage orders={orders} /> 
                                    </table>
                                </div>
                                <div><Link className="button" to="/checkout"> Checkout </Link></div>
                                
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
                    <Route path="/order-menu">
                        <OrderMenuPage />
                    </Route>
                    <Route path="/current-order">
                        <CurrentOrder />
                    </Route>
                    <Route path="/checkout">
                        <CheckoutPage />
                    </Route>
                </Switch>      
            </Router>
        );
    }
export default CustomerProfile;