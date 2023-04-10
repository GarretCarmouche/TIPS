import React, { useState } from "react";
import '../App.css';
import logo from '../TIPSlogo.png';
import profile from '../profile-img.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import HomePage from './homePage';

const EntryPage = () => {
    const history = useHistory();

    const [selectedOption, setSelectedOption] = useState(1); // Set the default selected option to 1


    const handleOptionChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (newValue !== selectedOption) {
          setSelectedOption(newValue);
        }
      };

    return (
        <Router>
            <Switch>
                <div className="App">
                <div className="App-background">
                    <img src={logo} className="App-logo-corner" alt="logo" />
                    <div>
                        <div className="account-header">
                            <img src={profile} className="profile-img" alt="profile image" />
                            Your Name 
                        </div>
                        <p>your_username</p>
                    </div>
                    <div>
                        <div className="payment-method-table">
                        <table>
                            <thead>
                                <th>Payment Method</th>
                                <th></th>
                                <th className="add-new">
                                    <button> + add new </button>
                                </th>
                            </thead>
                            <tbody>
                                <tr className={selectedOption === 1 ? "selected-row" : ""}>
                                <td>
                                    <input
                                    type="radio"
                                    name="payment-option"
                                    value="1"
                                    checked={selectedOption === 1}
                                    onChange={handleOptionChange}
                                    />
                                </td>
                                <td>Visa</td>
                                <td>...........9021</td>
                                </tr>
                                <tr className={selectedOption === 2 ? "selected-row" : ""}>
                                <td>
                                    <input
                                    type="radio"
                                    name="payment-option"
                                    value="2"
                                    checked={selectedOption === 2}
                                    onChange={handleOptionChange}
                                    />
                                </td>
                                <td>Mastercard</td>
                                <td>...........3782</td>
                                </tr>
                                <tr className={selectedOption === 3 ? "selected-row" : ""}>
                                <td>
                                    <input
                                    type="radio"
                                    name="payment-option"
                                    value="3"
                                    checked={selectedOption === 3}
                                    onChange={handleOptionChange}
                                    />
                                </td>
                                <td>American Express</td>
                                <td>...........1208</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div>
                        <div className="back-button" onClick={() => {history.goBack();}}> back </div>
                    </div>
                </div>
                </div>
            </Switch>
            <Route path="/home">
                <HomePage/> 
            </Route>
        </Router>
        
    );
}

export default EntryPage;