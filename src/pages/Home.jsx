import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center flex items-center h-[70vh] justify-center mt-3 rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://cdn.dummyjson.com/recipe-images/28.webp')",
      }}
    >
      {/* Dark overlay over the image */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      {/* Content with semi-transparent background */}
      <div
        className="relative z-10 text-center px-6 py-10 
                      bg-white/5 backdrop-blur-sm text-white 
                      rounded-2xl shadow-xl max-w-xl w-full mx-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🍽️ Welcome to Recipe List App
        </h1>
        <p className="text-lg mb-6">
          Dive into deliciousness. Discover and cook amazing meals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/recipes"
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg shadow transition duration-300"
          >
            Browse Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
