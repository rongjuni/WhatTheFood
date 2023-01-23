import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import axios from "axios";

function App() {
  let APP_ID = "7e8783af";
  let APP_KEY = "d48bee7f72049cce2b1d03458d05038b";

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipe(response.data.hits);
    console.log(response.data.hits);
  };

  return (
    <div className="App">
      <h1>Let's start "What The Food"</h1>
      <form>
        <input type="test" />
        <button type="button">Search</button>
      </form>
      {recipe.map((recipe, int) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingridient={recipe.recipe.ingredientLines}
          int={int}
        />
      ))}
    </div>
  );
}

export default App;
