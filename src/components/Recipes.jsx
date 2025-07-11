import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function Recipes() {
  const [recipeList, setRecipeList] = useState([]);
  async function fetchData() {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    // console.log(data);
    setRecipeList(data.recipes);
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      {recipeList.map((recipe, i) => (
        <Recipe props={recipe} key={i} />
      ))}
    </div>
  );
}
