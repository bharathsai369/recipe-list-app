import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ props }) {
  // console.log(props);
  return (
    <div className="w-full card bg-base-100 shadow-sm">
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-medium text-2xl">{props.name}</h2>
        <div className="card-actions">
          <Link to={`/recipes/${props.id}`}>
            <button className="btn btn-outline text-primary">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
