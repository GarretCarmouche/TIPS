import '../App.css';
import React, { useState, useEffect } from 'react';
import DisplayOrder from './DisplayOrder';


const OrderHistory = ({ orders }) =>{ 
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
export default OrderHistory;