import '../App.css';
import logo from '../TIPSlogo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import profile from '../profile-img.png';
import React, { useState, useEffect } from 'react';
import EmployeeHomePage from './EmployeeHomePage';

const CustomerProfile = () =>{  
        const [items, setItems] = useState([
            {date: 'April 7, 2023', item: 'Frozen Drink', price: '$10.00'},
            {date: 'April 7, 2023', item: 'Long Island Iced Tea', price: '$14.00'},
            {date: 'April 7, 2023', item: 'Specialty Cocktail', price: '$12.00'}
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
                    <Route path="/customer-profile">
                        <div className="App">
                         <div className="App-background">
                                <img src={logo} className="App-logo" alt="logo" />
                                <div className="home-header"> 
                                    <div className="dropdown-wrapper">
                                        <img src={profile} className="profile-img" alt="profile image" />
                                        <div className="dropdown-header" onClick={toggleDropdown}>
                                            <div className="dropdown-header-text"> Your Name </div>
                                            <div className="dropdown-arrow">{isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}</div>
                                        </div>
                                        {isOpen && (
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item-button" to="/employee-home" > manage account </Link> 
                                                <a class="dropdown-item-button" href="../" target="_self" rel="noopener noreferrer"> log out </a>      
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="purchase-history-table">
                                    <h2> Current Purchase Tab Total is $36.00</h2>
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
                    <Route path="/employee-home">
                        <EmployeeHomePage />
                    </Route>
                </Switch>      
            </Router>
        );
    }
export default CustomerProfile;