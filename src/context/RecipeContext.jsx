import React, { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

export function useRecipes() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setRecipes(data.recipes);
    }

    fetchData();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes }}>
      {children}
    </RecipeContext.Provider>
  );
}
