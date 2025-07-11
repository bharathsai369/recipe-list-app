import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext";

export default function Breadcrumbs() {
  const location = useLocation();
  const { recipes } = useRecipes();

  const paths = location.pathname.split("/").filter((p) => p !== "");

  return (
    <div className="breadcrumbs text-3xl p-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {paths.map((segment, index) => {
          const path = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          // Replace ID with recipe name if route is /recipes/:id
          let label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          if (paths[index - 1] === "recipes") {
            const recipe = recipes.find((r) => r.id === parseInt(segment));
            if (recipe) label = recipe.name;
          }

          return (
            <li key={index}>
              {isLast ? <span>{label}</span> : <Link to={path}>{label}</Link>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
