import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import axios from "axios";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function App() {
  let APP_ID = "7e8783af";
  let APP_KEY = "d48bee7f72049cce2b1d03458d05038b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
      <form onSubmit={updateQuery}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>
      {recipes.map((recipes, int) => (
        <Recipe
          title={recipes.recipe.label}
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
          ingridient={recipes.recipe.ingredientLines}
          int={int}
        />
      ))}
    </div>
  );
}

export default App;
