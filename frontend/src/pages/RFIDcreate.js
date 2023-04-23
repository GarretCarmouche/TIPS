import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import axios from "../axios";
import { useState } from 'react';

const keyAdd_API_URL = "/keyAdd";

class KeyboardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event) => {
        // Update the state with the input value
        const inputValue = event.target.value;
        // Check if input value has more than 10 digits
        if (inputValue.length <= 10) {
            this.setState({ inputValue });
        }
    }

    handleSave = (event) => {
        event.preventDefault(); // Prevent form submission
        // Access the saved input data from state
        const { inputValue } = this.state;
        // Do something with the input data, e.g. send it to a server
        console.log('Input value:', inputValue);

        axios.get(keyAdd_API_URL, {
            params: {
                cardID: inputValue
            }
        })
    }

    render() {
        return (
            <div>
                <Route path="/RFIDcreate">
                    <div className="App">
                        <div className='App-background'>
                            <h1> RFID Tag Identifier </h1>
                            <form onSubmit={this.handleSave}> {/* Form element */}
                                <input
                                    type="text"
                                    value={this.state.inputValue}
                                    onChange={this.handleInputChange}
                                />
                                <p>Input value: {this.state.inputValue}</p>
                                <button className='button' type="submit">Save</button> {/* Submit button */}
                            </form>
                        </div>
                    </div>
                </Route>
            </div>
        );
    }
}

export default KeyboardInput;
