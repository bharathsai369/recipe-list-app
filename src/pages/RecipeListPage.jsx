import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipeContext";

export default function RecipeListPage() {
  const { recipes } = useRecipes();
  return (
    <div>
      {/* <h2>RecipeListPage</h2> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {recipes.map((recipe, i) => (
          <RecipeCard props={recipe} key={i} />
        ))}
      </div>
    </div>
  );
}
