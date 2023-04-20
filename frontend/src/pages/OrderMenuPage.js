import '../App.css';
import React, { useState, useEffect } from 'react';
import DisplayOrder from './DisplayOrder';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import CustomerProfile from './CustomerProfile';
import OrderHistory from './OrderHistory';


const OrderMenuPage = () =>{ 
    const [order, setOrder] = useState([]);
    const [orders, setOrders] = useState([]);
    const history = useHistory();

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
    function addDrinkToOrder(drink) {
        const updatedOrder = [...order, drink];
        setOrder(updatedOrder);
    }
    function submitOrder(order) {
        const totalPrice = order.reduce((total, drink) => total + drink.price, 0);
        const newOrder = { drinks: order, totalPrice: totalPrice };
        setOrders([...orders, newOrder]);
        setOrder([]);
        history.push('/customer-profile')
    }
    return (
        <div className="App">
            <div className="App-background">
                <div>
                    {drinkOptions.map((drink, index) => (
                        <button className='button' key={index} onClick={() => addDrinkToOrder(drink)}>
                            {drink.name} - ${drink.price}
                        </button>
                    ))}
                    <DisplayOrder order={order} />
                    <div>
                        <button className='button' onClick={() =>submitOrder(order)}> Submit Order </button> 
                    </div>
                </div>
            </div>
        </div>         
    );
}

export default OrderMenuPage;