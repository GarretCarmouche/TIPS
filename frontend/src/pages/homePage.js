import React, { useState }from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AccountPage from './accountPage';
import logo from '../TIPSlogo.png';
import profile from '../profile-img.png';
import LoginPage from './LoginPage';
import globalVariable from "./global";

const HomePage = () =>{
    const [items, setItems] = useState([
        {date: 'April 7, 2023', item: 'Frozen Drink', price: '$10.00'},
        {date: 'April 6, 2023', item: 'Long Island Iced Tea', price: '$14.00'},
        {date: 'April 4, 2023', item: 'Specialty Cocktail', price: '$12.00'},
        {date: 'April 2, 2023', item: 'Imported Beer', price: '$8.00'},
        {date: 'March 30, 2023', item: 'Gin and Tonic', price: '$9.50'},
        {date: 'March 27, 2023', item: 'Whiskey Sour', price: '$10.00'},
        {date: 'March 25, 2023', item: 'House Wine', price: '$8.00'},
        {date: 'March 22, 2023', item: 'Rum and Coke', price: '$7.50'},
        {date: 'March 20, 2023', item: 'Bloody Mary', price: '$9.00'},
        {date: 'March 18, 2023', item: 'Domestic Beer', price: '$5.50'}
      ]);
    
    const renderTableData = () => {
        return items.map((item, index) => {
            const { date, item: itemName, price } = item;
            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{itemName}</td>
                <td>{price}</td>
              </tr>
            );
          });
      }

    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <div className="App">
                     <div className="App-background">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2> CustomerID = {globalVariable.customerID}</h2>
                            <div className="home-header"> 
                                <div className="dropdown-wrapper">
                                    <img src={profile} className="profile-img" alt="profile image" />
                                    <div className="dropdown-header" onClick={toggleDropdown}>
                                        <div className="dropdown-header-text"> CustomerID = {globalVariable.customerID} </div>
                                        <div className="dropdown-arrow">{isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}</div>
                                    </div>
                                    {isOpen && (
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item-button" to="/account" > manage account </Link> 
                                            <a class="dropdown-item-button" href="../" target="_self" rel="noopener noreferrer"> log out </a>      
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="purchase-history-table">
                                <h2> Purchase History </h2>
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Item</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderTableData()}
                                    </tbody>  
                                </table>
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
                <Route path="/account">
                    <AccountPage />
                </Route>
            </Switch>      
        </Router>
    );
}

export default HomePage;