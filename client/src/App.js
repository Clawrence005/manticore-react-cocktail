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
  }, [])

  // const [state, setState] = useState({
  //   userName: "",
  //   email: "",
  //   bio: "",
  //   userImage: "",
  // });

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [userImage, setUserImage] = useState('');

  // const [inputValue, setInputValue] = useState({
  //   userName: '', bio: '', email: '', userImage: ''
  // });

  // const [inputUserName, setInputUserName] = useState({});

  // const handlerUserName = event => {
  //   setInputUserName(event.target.value);
  // };

  const handleSubmit = (event) => {
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
  return (
    <div className="App">
      <h1>Manticore</h1>
      <form onSubmit={handleSubmit}>
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

        <label>email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>bio</label>
        <input
          type="text"
          name="bio"
          value={bio}
          onChange={e => setBio(e.target.value)} />
        <br />

        <label>image</label>
        <input
          type="text"
          name="userImage"
          value={userImage}
          onChange={e => setUserImage(e.target.value)} />
        <br />

        <button type="submit">submit</button>
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
