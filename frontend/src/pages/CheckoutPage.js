import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profile from '../profile-img.png';
import React, { useState, useEffect } from 'react';
import EmployeeHomePage from './EmployeeHomePage';
import HomePage from './homePage';
import CustomerProfile from './CustomerProfile';
import CheckoutPage from './CheckoutPage';
import { getCurrentDate } from './utils/getCurrentDate';
import OrderHistory from './OrderHistory';

console.log(getCurrentDate())

function Checkout(props) {
    const { orderHistory } = props;
  
    //const totalPrice = orderHistory.reduce((total, drink) => total + drink.price, 0);
  
    return (
      <Router>
                <Switch>
      <Route path="/checkout">
                        <div className="App">
                         <div className="App-background">
                         <div>Checkout</div>
      </div>
      <div>
        
        {/* <ul>
          {orderHistory.map((drink) => (
            <li key={drink.id}>
              {drink.name} - ${drink.price}
            </li>
          ))}
        </ul>
        <p>Total: ${totalPrice.toFixed(2)}</p> */}
      </div>
      </div>
      </Route>
      </Switch>
      </Router>
    );
  }
  
  export default Checkout