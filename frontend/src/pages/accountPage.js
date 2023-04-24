import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../TIPSlogo.png";
import profile from "../profile-img.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";import globalVariable from "./global";


import HomePage from "./homePage";
import axios from "../axios";

const EntryPage = () => {

  const PAYMENT_METHODS_API_URL = "/getPaymentInfo";
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  
  useEffect(() => {
    console.log("Before axios request");
    axios
      .get(PAYMENT_METHODS_API_URL, {
        params: {
          CardName: nameOnCard,
          CardNumber: cardNumber,
        },
      })
      .then(function (response) {
        console.log("Axios request successful");
        var data = parseInt(response.data);

        if (data === -1) {
          setError("error");
        } else {
          setSuccess(true);

          const newPaymentMethod = {
            id: paymentMethods.length + 1,
            name: nameOnCard,
            lastDigits: cardNumber.slice(-4),
          };

          setPaymentMethods([...paymentMethods, newPaymentMethod]);
        }
      })
      .catch(function (error) {
        setError(error);
        console.log("Axios request failed");
      });
  }, [nameOnCard, cardNumber]);

  const handleOptionChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue !== selectedOption) {
      setSelectedOption(newValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const newPaymentMethod = {
      id: paymentMethods.length + 1,
      name: nameOnCard,
      lastDigits: cardNumber.slice(-4),
    };

    paymentMethods.push(newPaymentMethod);
    
    setShowForm(false);
    setSelectedOption(newPaymentMethod.id); 

    e.target.reset();
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="App-background">
              <img src={logo} className="App-logo" alt="logo" />
              <p></p>
              <div>
              <Link className="button" to="/login">
              log in
              </Link>
              <Link className="button" to="/signup">
              sign up
              </Link>
              </div>
              </div>
              </div>
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/account">
                <div className="App">
                <div className="App-background">
                <img src={logo} className="App-logo-corner" alt="logo" />
                <div>
                  <p></p>
                  <p></p>
                <div className="account-header">
                <img
                                src={profile}
                                className="profile-img"
                                alt="profile image"
                              />
                Your Name
                </div>
                <p>your_username</p>
                </div>
                <div>
                <div className="payment-method-table">
                  
                  <table>
                    <thead>
                      <tr>
                        <th>Payment Method</th>
                        <th></th>
                        <th className="add-new">
                        <button onClick={() => setShowForm(true)}> + add new </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentMethods.map((method) => (
                      <tr
                      key={method.id}
                      className={
                      selectedOption === method.id ? "selected-row" : ""
                      }
                      >
                        <td>
                        <input
                        type="radio"
                        name="payment-option"
                        value={method.id}
                        checked={selectedOption === method.id}
                        onChange={handleOptionChange}
                        />
                        </td>
                        <td>{method.name}</td>
                        <td>...........{method.lastDigits}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                </div>
                {showForm && (
                  <form className= "form-group" onSubmit={handleFormSubmit}>
                <div className="payment-form-container">
                  <h1>Enter payment information:</h1>
                    <label>
                      Credit card number:
                      <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                    </label>
                    <p></p>
                    <label>
                      Name on card:
                      <input type="text" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} required />
                    </label>
                    <p></p>
                    <label>
                      CVV:
                      <input type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                    </label>
                    <p></p>
                    <label>
                      Expiration date:
                      <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
                    </label>
                    <p></p>
                    <button type="submit" className="submit-button">Submit</button> 
                </div>
                </form>
              )}
              <p></p>
              <p></p>
                <div>
                  <Link className="back-button" to="/home">
                  back
                  </Link>
                </div>
              </div>
            </div>
          </Route>
      </Switch>
    </Router>
    );
    };
    
export default EntryPage;
    