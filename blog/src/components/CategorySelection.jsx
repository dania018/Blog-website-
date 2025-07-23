import React from "react";

const CategorySelection = ({ onSelectedCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-500 font-semibold">
      <button
        onClick={() => onSelectedCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
      > All
      </button>

      {categories.map((category) => (
        <button
          onClick={() => onSelectedCategory(category)}
          key={category}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
