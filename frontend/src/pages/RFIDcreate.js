import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

class KeyboardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event) => {
        // Update the state with the input value
        this.setState({ inputValue: event.target.value });
    }

    handleSave = (event) => {
        event.preventDefault(); // Prevent form submission
        // Access the saved input data from state
        const { inputValue } = this.state;
        // Send POST request to "keyAdd" API endpoint
        fetch('/api/keyAdd', {
            method: 'POST',
            body: JSON.stringify({ input: inputValue }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                // Do something with the API response, if needed
            })
            .catch(error => {
                console.error('API error:', error);
                // Handle API error, if needed
            });
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
