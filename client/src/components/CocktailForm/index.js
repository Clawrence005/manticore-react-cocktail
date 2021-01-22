// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CocktailForm() {
//   const [cocktailName, setCocktailName] = useState('');
//   const [creatorName, setCreatorName] = useState('');
//   const [cocktailImage, setCocktailImage] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [method, setMethod] = useState('');
//   const [glass, setGlass] = useState('');
//   const [garnish, setGarnish] = useState('');

//   const handleCocktailSubmit = (event) => {
//     event.preventDefault();

//     const newCocktail = {
//       cocktailName,
//       creatorName,
//       cocktailImage,
//       ingredients,
//       method,
//       glass,
//       garnish,
//     }
//     axios.post('http://localhost:5000/api/cocktails', newCocktail).then(res => console.log(res.data));
//   }
//   console.log(`creatorName ${creatorName}`)
//   return (
//     <form onSubmit={handleCocktailSubmit}>
//       <h2>Cocktail Form</h2>
//       <br />

//       <label>Cocktail Name</label>
//       <input
//         type="text"
//         name="cocktail name"
//         value={cocktailName}
//         onChange={e => setCocktailName(e.target.value)}
//       />
//       <br />

//       <label>Creator's Name</label>
//       // dropdown pulls state of populated users of  
//       <select


//         value={creatorName}
//         onChange={e => setCreatorName(e.target.value, console.log(`setCreatorName: ${e.target.value}  creatorName: ${creatorName}`))}

//       >
//         <option disabled value=''></option>
//         {users.map(user => (<option key={user._id} value={user._id}>{user.userName}</option>))}
//       </select>

//       <br />

//       <label>Cocktail Image</label>
//       <input
//         type="text"
//         name="cocktail image"
//         value={cocktailImage}
//         onChange={e => setCocktailImage(e.target.value)}
//       />
//       <br />

//       <label>Ingredients</label>
//       <input
//         type="text"
//         name="ingredients"
//         value={ingredients}
//         onChange={e => setIngredients(e.target.value)}
//       />
//       <br />

//       <label>Method</label>
//       <input
//         type="text"
//         name="method"
//         value={method}
//         onChange={e => setMethod(e.target.value)}
//       />
//       <br />

//       <label>Glassware</label>
//       <input
//         type="text"
//         name="glass"
//         value={glass}
//         onChange={e => setGlass(e.target.value)}
//       />
//       <br />

//       <label>Garnish</label>
//       <input
//         type="text"
//         name="garnish"
//         value={garnish}
//         onChange={e => setGarnish(e.target.value)}
//       />
//       <br />

//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// export default CocktailForm;