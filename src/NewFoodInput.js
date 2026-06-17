import React from "react";

const NewFoodInput = () => {
  return (
    <form className="food-form">
      <input type="text" aria-label="Add a food to the list" />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
