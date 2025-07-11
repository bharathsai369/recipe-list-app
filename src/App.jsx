import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Recipes from "./components/Recipes";
import Home from "./pages/Home";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import Breadcrumbs from "./components/Breadcrumbs";
import GradientText from "./components/GradientText";

function App() {
  return (
    <div className=" p-5 w-screen mx-auto ">
      {/* <div className=" p-4 w-[100vw] mx-auto "> */}
      {/* <h1 className="text-center">Recipe List App</h1> */}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        {/* Recipe List App */}
        <h1>Recipe List App</h1>
      </GradientText>
      <Breadcrumbs />

      {/* <Recipes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeListPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      </Routes>

      {/* <RecipeListPage /> */}
    </div>
  );
}

export default App;
