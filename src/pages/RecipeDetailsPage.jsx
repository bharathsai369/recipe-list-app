import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="card lg:card-side bg-base-100 shadow-md max-w-6xl mx-auto p-4">
      <figure className="w-full lg:w-8/12">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="object-cover w-full h-full rounded"
        />
      </figure>

      <div className="card-body lg:w-4/12 overflow-y-auto">
        <h2 className="card-title text-3xl font-bold text-primary mb-2">
          {recipe.name}
        </h2>

        <div className="mb-2 text-sm text-gray-500">
          ⭐ Rating: {recipe.rating}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Ingredients:
          </h3>
          <ul className="list-disc list-inside pl-2 space-y-1">
            {recipe.ingredients.map((item, i) => (
              <li
                key={i}
                className="bg-base-200 px-2 py-1 rounded-md text-sm hover:bg-base-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Instructions:
          </h3>
          <ol className="list-decimal list-inside pl-2 space-y-2">
            {recipe.instructions.map((step, i) => (
              <li
                key={i}
                className="border-l-4 border-primary pl-2 text-sm bg-base-200 p-2 rounded hover:bg-base-300 transition"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-outline  text-primary"
            onClick={() => navigate("/recipes")}
          >
            ← Back to Recipes
          </button>
          <button
            className="btn btn-outline text-primary "
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
