import React from "react";

export default function Recipe({ props }) {
  // console.log(props);
  return (
    <div>
      <span>{props.name}</span>
      <img src={props.image} alt={props.name} />
      <p>Rating: {props.rating}</p>
      <p>Ingredients</p>
      {props.ingredients.map((i) => (
        <ul>
          <li>{i}</li>
        </ul>
      ))}
      <p>Instructions</p>
      {props.instructions.map((i) => (
        <ul>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  );
}
