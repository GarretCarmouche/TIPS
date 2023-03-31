import logo from './TIPSlogo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Function names must start with capital letter

function TestApiCalls(endpoint){
  axios.get(endpoint)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <em>
           Welcome
          </em>
        </p>
      </header>
      <div>
      {TestApiCalls('/api/someEndpoint')}
      </div>
    </div>
  );
}

export default App;
