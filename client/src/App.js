import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch((err) => console.log(err))
  }, []);

  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cocktails")
      .then(response => setCocktails(response.data))
      .catch((err) => console.log(err))
  }, []);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [userImage, setUserImage] = useState('');

  const handleUserSubmit = (event) => {
    event.preventDefault();
    // alert(`
    // submitting: 
    // userName: ${userName}
    // email: ${email}
    // bio: ${bio}
    // userImage: ${userImage}
    // `)

    const newUser = {
      userName,
      email,
      bio,
      userImage,
    }
    axios.post('http://localhost:5000/api/users', newUser)
      .then(res => console.log(res.data));
  }

  const [cocktailName, setCocktailName] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [cocktailImage, setCocktailImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
  const [glass, setGlass] = useState('');
  const [garnish, setGarnish] = useState('');

  const handleCocktailSubmit = (event) => {
    event.preventDefault();

    const newCocktail = {
      cocktailName,
      creatorName,
      cocktailImage,
      ingredients,
      method,
      glass,
      garnish,
    }
    axios.post('http://localhost:5000/api/cocktails', newCocktail).then(res => console.log(res.data));
  }

  return (
    <div className="App">
      <h1>Manticore</h1>
      <form onSubmit={handleUserSubmit}>
        <h2>User Form</h2>
        <br />

        <label>Name</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <br />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <label>Bio</label>
        <input
          type="text"
          name="bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <br />

        <label>Image</label>
        <input
          type="text"
          name="userImage"
          value={userImage}
          onChange={e => setUserImage(e.target.value)}
        />
        <br />

        <button type="submit">submit</button>
      </form>

      <form onSubmit={handleCocktailSubmit}>
        <h2>Cocktail Form</h2>
        <br />

        <label>Cocktail Name</label>
        <input
          type="text"
          name="cocktail name"
          value={cocktailName}
          onChange={e => setCocktailName(e.target.value)}
        />
        <br />

        <label>Creator's Name</label>
        {/* dropdown pulls state of populated users of   */}
        <select
          value={creatorName}
          onChange={e => setCreatorName(e.target.value)}
        >
          {users.map(user => (<option key={user._id} value={user._id}>{user.userName}</option>))}
        </select>
        {/* <input
          type="text"
          name="creatorName"
          value={creatorName}
          onChange={e => setCreatorName(e.target.value)}
        />*/}
        <br />

        <label>Cocktail Image</label>
        <input
          type="text"
          name="cocktail image"
          value={cocktailImage}
          onChange={e => setCocktailImage(e.target.value)}
        />
        <br />

        <label>Ingredients</label>
        <input
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <br />

        <label>Method</label>
        <input
          type="text"
          name="method"
          value={method}
          onChange={e => setMethod(e.target.value)}
        />
        <br />

        <label>Glassware</label>
        <input
          type="text"
          name="glass"
          value={glass}
          onChange={e => setGlass(e.target.value)}
        />
        <br />

        <label>Garnish</label>
        <input
          type="text"
          name="garnish"
          value={garnish}
          onChange={e => setGarnish(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h2>users</h2>
      {users.map((user) => <div className="card" key={user._id}>
        <div ><strong>{user.userName}</strong></div>
        <div >{user.email}</div>
        <div >{user.bio}</div>
        <div >{user.userImage}</div>

      </div>)}
      <h2>cocktails</h2>
      {cocktails.map((cocktail) => <div className="card" key={cocktail._id}>
        <div ><strong>{cocktail.cocktailName}</strong></div>
        <div >{cocktail.creatorName.userName}</div>
        <div >{cocktail.cocktailImage}</div>
        <div >{cocktail.ingredients}</div>
        <div >{cocktail.method}</div>
        <div >{cocktail.glass}</div>
        <div >{cocktail.garnish}</div>
      </div>)}
      {/* {users.map((user) =>
        <div key={user._id} >{user.userName}</div>
      )} */}

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
