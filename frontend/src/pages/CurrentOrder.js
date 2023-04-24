import '../App.css';
import React, { useState, useEffect } from 'react';
import globalVariable from "./global";


const CurrentOrder = ({ orders }) =>{ 
  useEffect( () => {
    axios.get(ADD_ORDER_API_URL, {
        params: {
            customerID: CUSTOMER_ID
        }
    })
    .then(function (response) {
        var data = parseInt(response.data);

        if(data == -1) {
            setError("No Current Order");
        } else {
            setSuccess(true);
            setPayment(data);
            currentOrder = data;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
  })
  .then(function (response) {
    const obj = JSON.stringify(response.data);
    const newObj = JSON.parse(obj)
    cardNumber = newObj['DrinkName'];
    cardName = newObj['DrinkPrice'];
      if(obj == null) {
          setError("No Order Information");
      } else {
          setSuccess(true);
          setCardNumber(drinkName);
          setCardName(drinkPrice);
      }
  })
  .catch(function (error) {
      console.log(error);
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
          setError("No current order");
      } else {
          setSuccess(true);
          setDrinkNameHistory(drinkName);
          setDrinkPriceHistory(drinkPrice);
      }

  })
  .catch(function (error) {
    console.log(error);
  })
  },[])

    return (
        <div>
        <h2>Current Customer Order:</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Order {index + 1} - Total Price: ${order.totalPrice}
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default CurrentOrder;