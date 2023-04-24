import '../App.css';
import PinInput from 'react-pin-input';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "../axios";
import globalVariable from "./global";
import LoginPage from './LoginPage';

const PRIMARY_PAYMENT_API_URL = "/getCustomerPrimaryPayment";
const PAYMENT_TYPE_API_URL = "/getPaymentInfo";
const ORDER_HISTORY_API_URL = "/getCustomerOrderHistory";
var primaryPayment;
var payment;  
const CUSTOMER_ID = globalVariable.customerID;

const Checkout = () =>  {    
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  var [primaryPayment, setPayment] = useState();
  var [cardNumber, setCardNumber] = useState();
  var [cardName, setCardName] = useState();
  var [drinkNameHistory, setDrinkNameHistory] = useState();
  var [drinkPriceHistory, setDrinkPriceHistory] = useState();


  useEffect( () => {
    axios.get(PRIMARY_PAYMENT_API_URL, {
        params: {
            customerID: CUSTOMER_ID
        }
    })
    .then(function (response) {
        var data = parseInt(response.data);

        if(data == -1) {
            setError("No Primary Card Selected");
        } else {
            setSuccess(true);
            setPayment(data);
            primaryPayment = data;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
  })
  useEffect(() =>{
    axios.get(PAYMENT_TYPE_API_URL, {
      params: {
          customerID: CUSTOMER_ID,
          paymentID: primaryPayment
      }
  })
  .then(function (response) {
    const obj = JSON.stringify(response.data);
    const newObj = JSON.parse(obj)
    cardNumber = newObj['CardNumber'];
    cardName = newObj['CardName'];
      if(obj == null) {
          setError("No Primary Information");
      } else {
          setSuccess(true);
          setCardNumber(cardNumber);
          setCardName(cardName);
      }
  })
  .catch(function (error) {
      console.log(error);
  })
  })
  useEffect(() =>{
    axios.get(ORDER_HISTORY_API_URL, {
      params: {
          customerID: CUSTOMER_ID,
      }
  })
  .then(function (response) {
    const obj = JSON.stringify(response.data);
    const newObj = JSON.parse(obj);
    drinkNameHistory = newObj.map((item) => item.DrinkName + "\n");
    const totalPrice = newObj.reduce((total, drink) => total + parseInt(drink.DrinkPrice),0);
    drinkPriceHistory = totalPrice;    
      if(obj == null) {
          setError("No order history");
      } else {
          setSuccess(true);
          setDrinkNameHistory(drinkNameHistory);
          setDrinkPriceHistory(drinkPriceHistory);
      }

  })
  .catch(function (error) {
      console.log(error);
  })
  },[])

console.log("prime" +primaryPayment);
console.log("payment" + payment);
console.log("orderHist " +drinkPriceHistory);
    return (
      <Router>
                <Switch>
      <Route path="/checkout">
                        <div className="App">
                         <div className="App-background">
                         <h1>Checkout</h1>
                         <div>Current Order: 
                         <div className="display-linebreak"> 
                            {drinkNameHistory}
                            <label>Total Price</label>: {drinkPriceHistory} 
                        </div></div>
                         <div>Payment for:  {cardName}</div>
                         <div>Card Number:  {cardNumber}</div>
                         <div><Link className="button" to="/employee-pin"> Checkout </Link>
      </div></div>
      <div>
      </div>
      </div>
      </Route>
      <Route path = "/employee-pin">
      <div className="App">
        <div className="App-background">
          <h1>Employee Pin</h1>
            <PinInput 
              length={4} 
              initialValue=""
              secret
              secretDelay={100} 
              onChange={(value, index) => {}} 
              type="numeric" 
              inputMode="number"
              style={{padding: '10px'}}  
              inputStyle={{borderColor: 'red'}}
              inputFocusStyle={{borderColor: 'blue'}}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />      
              <Link className="button" to="/checkout-complete"> Continue to Payment </Link> 
        </div>
      </div>
    </Route>
    <Route path = "/checkout-complete">
    <div className="App">
        <div className="App-background">
          <h1>Payment is Complete!</h1>
          <Link className="button" to="/login"> Back to Login </Link> 
        </div>
    </div>
    </Route>
    <Route path = "/login">
      <LoginPage/>
    </Route>
      </Switch>
      </Router>
    );
  }
  
  export default Checkout