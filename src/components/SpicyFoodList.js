import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    let newFoodList = [...foods]
    newFoodList.push(newFood);
    setFoods(newFoodList);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foods.map(food => <li key={food.id}>{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}</li>)}</ul>
    </div>
  );
}

export default SpicyFoodList;
