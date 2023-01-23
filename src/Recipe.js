import React from "react";

const Recipe = ({ title, calories, image, ingridient, int }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{calories}</p>
      <img src={image} alt="" />
      <ol>
        {ingridient.map((ingridient) => {
          return <li>{ingridient}</li>;
        })}
      </ol>
    </div>
  );
};

export default Recipe;
