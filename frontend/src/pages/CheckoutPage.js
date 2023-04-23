import '../App.css';
import logo from '../TIPSlogo.png';
import PinInput from 'react-pin-input';
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
import DisplayOrder from './DisplayOrder';
import axios from "../axios";

const PRIMARY_PAYMENT_API_URL = "/getCustomerPrimaryPayment";
const PAYMENT_TYPE_API_URL = "/getPaymentInfo";
var customerID = 69;
var primaryPayment;
var payment;
const Checkout = () =>  {    
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  var [primaryPayment, setPayment] = useState();
  var [cardNumber, setCardNumber] = useState();
  var [cardName, setCardName] = useState();


  useEffect( () => {
    axios.get(PRIMARY_PAYMENT_API_URL, {
        params: {
            customerID: customerID
        }
    })
    .then(function (response) {
        var data = parseInt(response.data);

        if(data == -1) {
            setError("No Primary Card Selected");
            console.log(primaryPayment);
        } else {
            setSuccess(true);
            setPayment(data);
            primaryPayment = data;
            console.log(primaryPayment);
        }
    })
    .catch(function (error) {
        console.log(error);
    })
  })
  useEffect(() =>{
    axios.get(PAYMENT_TYPE_API_URL, {
      params: {
          customerID: customerID,
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
console.log("prime" +primaryPayment);
console.log("payment" + payment)
    return (
      <Router>
                <Switch>
      <Route path="/checkout">
                        <div className="App">
                         <div className="App-background">
                         <h1>Checkout</h1>
                         <div>Current Order: </div>
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
              <Link className="button" to="/checkout"> Continue to Payment </Link> 
        </div>
      </div>
    </Route>
      </Switch>
      </Router>
    );
  }
  
  export default Checkout