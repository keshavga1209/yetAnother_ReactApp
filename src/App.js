import './App.css';
import Recipie from './Recipie'
import React, {useEffect, useState} from 'react';

function App() {

  const APP_ID = 'dd70738a';
  const APP_KEY = 'f222b54c4eca7310c73e9bc32190a596	';  
  

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  const EXAMPLE = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(async ()=>{
    const res = await fetch(EXAMPLE);
    const data =await res.json();
    setRecipies(data.hits)
    console.log(data);
    
  }, [query])

  const updateSeach =e =>{
    setSearch(e.target.value)
  }

  const getSearch = e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
    <form onSubmit ={getSearch} className="search-form">
    <div class="input-holder">
      <input className= "search-bar" type ="text" value ={search} onChange ={updateSeach} placeholder="What u wanna make?"/>
      <button  className="search-button" type = "submit">Search</button>
    </div>
    </form>

    <div className ="recipe">
    {recipies.map(recipie =>(
      <Recipie key = {recipie.recipe.label} title ={recipie.recipe.label} calories = {recipie.recipe.calories} image ={recipie.recipe.image}
        ingredients ={recipie.recipe.ingredients} />
    )
    )}
      </div>
    </div>
  );
}

export default App;
