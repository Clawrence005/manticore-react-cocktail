import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CocktailForm from './components/CocktailForm';

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

  const glassOptions = [{ name: 'rocks' }, { name: 'collins' }, { name: 'snifter' }, { name: 'flute' }, { name: 'pint glass' }, { name: 'wine glass' }];

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
  console.log(`creatorName ${creatorName}`)

  //   function handleDeleteUserAndCocktails(id) {
  //     console.log(id);
  //     axios.get(`http://localhost:5000/api/cocktails/${id}`)
  // cok
  //   }

  function handleDeleteCocktail(id) {
    console.log(id);
    axios.delete(`http://localhost:5000/api/cocktails/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  function clickShowsAllUserPosts(id) {
    console.log(id);
    axios.get(`http://localhost:5000/api/cocktails/author/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    // cocktails.map
  }

  return (<main>
    <header className="App-header">
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
    </header>
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
          onChange={e => setCreatorName(e.target.value, console.log(`setCreatorName: ${e.target.value}  creatorName: ${creatorName}`))}

        >
          <option disabled value=''></option>
          {users.map(user => (<option key={user._id} value={user._id}>{user.userName}</option>))}
        </select>
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
        {/* <input
          type="text"
          name="glass"
          value={glass}
          onChange={e => setGlass(e.target.value)}
        /> */}

        <select
          value={glass}
          onChange={e => setGlass(e.target.value, console.log(`glass ${glass}`))}>
          <option disabled value=''></option>
          {glassOptions.map((glass) => (<option key={glass.name} value={glass.name}>{glass.name}</option>))};
        </select>
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
      {users.map((user) => <div className="card" key={user._id} onClick={

        () => clickShowsAllUserPosts(user._id)
      }>
        {/* <button type="button" onClick={() => handleDeleteUserAndCocktails(user.id)}>x</button > */}
        <div ><strong>{user.userName}</strong></div>
        <div >{user.email}</div>
        <div >{user.bio}</div>
        <div >{user.userImage}</div>

      </div>)}

      <h2>cocktails</h2>
      {cocktails.map((cocktail) => <div className="card" key={cocktail._id}>
        <button className="delete-button" type="button" onClick={() => handleDeleteCocktail(cocktail._id)}>x</button >
        <div ><strong>{cocktail.cocktailName}</strong></div>
        <div >{cocktail.creatorName.userName}</div>
        <div >{cocktail.cocktailImage}</div>
        <div >{cocktail.ingredients}</div>
        <div >{cocktail.method}</div>
        <div >{cocktail.glass}</div>
        <div >{cocktail.garnish}</div>
      </div>)}
    </div>
  </main>
  );
}

export default App;