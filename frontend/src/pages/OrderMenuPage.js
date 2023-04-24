import '../App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import CustomerProfile from './CustomerProfile';
import globalVariable from "./global";
import { getCurrentDate } from './utils/getCurrentDate';



const OrderMenuPage = () =>{ 
    const [order, setOrder] = useState([]);
    const history = useHistory();

    const addToOrder = (drink) => {
        setOrder([...order, drink])
    }

    const drinkOptions = [
        { name: 'Margarita', price: 10},
        { name: 'Frozen Cocktail', price: 12},
        { name: 'Beer', price: 5},
        { name: 'Wine', price: 8},
        { name: 'Long Island Iced Tea', price: 10},
        { name: 'Specialty Cocktail', price: 12},
        { name: 'Gin and Tonic', price: 10},
        { name: 'Whiskey Sour', price: 10},
        { name: 'Vodka Cranberry', price: 10},
        { name: 'Rum and Coke', price: 10},
        { name: 'Bloody Mary', price: 14},
        { name: 'Vodka', price: 10},
        { name: 'Tequila', price: 10},
        { name: 'Rum', price: 10},
        { name: 'Bourbon', price: 10},
        { name: 'Gin', price: 10},
        { name: 'Water', price: 0},
        { name: 'Soda', price: 3},
    ]
    
    const totalPrice = order.reduce((total, drink) => total + drink.price, 0);
    return (
        <div className="App">
            <div className="App-background">
                <div>
                    {drinkOptions.map((drink, index) => (
                        <button className='button' key={index} onClick={() => addToOrder(drink)}>
                            {drink.name} - ${drink.price}
                        </button>
                    ))}
                    <div>
                        <h2>Current Order:</h2>
                    <ul>
                        {order.map((drink) => (
                            <div>{drink.name} - ${drink.price}</div>
                        ))}
                    </ul>
                    <p>Date: {getCurrentDate()}     Total Price: ${totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>         
    );
}

export default OrderMenuPage;