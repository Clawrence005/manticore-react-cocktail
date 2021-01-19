import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { responsiveFontSizes } from '@material-ui/core';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch((err) => console.log(err))
  }, []);

  // const [beers, setBeers] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cocktails")
      .then(response => setCocktails(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Manticore</h1>
      <h2>users</h2>
      {users.map((user) => <div key={user._id}>
        <div >{user.userName}</div>
        <div >{user.email}</div>
        <div >{user.bio}</div>
        <div >{user.userImage}</div>

      </div>)}
      <h2>cocktails</h2>
      {cocktails.map((cocktail) => <div key={cocktail._id}>
        <div>{cocktail.cocktailName}</div>
        <div >{cocktail.creatorName}</div>
        <div >{cocktail.cocktailImage}</div>
        <div >{cocktail.ingredients}</div>
        <div >{cocktail.method}</div>
        <div >{cocktail.glass}</div>
        <div >{cocktail.garnish}</div>
      </div>)}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
