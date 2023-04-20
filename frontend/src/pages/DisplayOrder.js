import '../App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentDate } from './utils/getCurrentDate';
import OrderHistory from './OrderHistory';
import OrderMenuPage from './OrderMenuPage';

const DisplayOrder = ({order}) =>{ 
    const totalPrice = order.reduce((total, drink) => total + drink.price, 0);
    return (
        <div>
            <h2>Adding to Order:</h2>
            <ul>
                {order.map((drink, index) => (
                    <div>{drink.name} - ${drink.price}</div>
                ))}
            </ul>
            <p>Date: {getCurrentDate()}     Total Price: ${totalPrice}</p>
        </div>
    )
}
export default DisplayOrder;