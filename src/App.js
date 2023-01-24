import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import axios from "axios";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  let APP_ID = "7e8783af";
  let APP_KEY = "d48bee7f72049cce2b1d03458d05038b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
    console.log("response.data.hits", response.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1 className="welcomeToWTF">Welcome to WTF</h1>
      <h3 className="whatTheFood">What The Food</h3>
      <Paper
        type="text"
        onSubmit={updateQuery}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "right",
          width: 400,
          margin: "auto",
        }}
      >
        <InputBase
          type="text"
          value={search}
          onChange={updateSearch}
          sx={{ ml: 2, flex: 1 }}
          placeholder="What Do You Feel like To Eat Today"
          inputProps={{ "aria-label": "food search" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* <form onSubmit={updateQuery}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form> */}
      <div style={{ margin: "10px" }}>
        <Grid container>
          {recipes.map((recipes, int) => (
            <Grid item xs={3}>
              <Recipe
                key={recipes.recipe.label}
                title={recipes.recipe.label}
                calories={recipes.recipe.calories}
                image={recipes.recipe.image}
                ingridient={recipes.recipe.ingredientLines}
                int={int}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
