import React from "react";

const Square = ({ color }) => {
  const lowerCaseColor = color.toLowerCase();
  const correctColor = CSS.supports("color", lowerCaseColor)
    ? lowerCaseColor
    : "";
  return <div className="square" style={{ background: correctColor }}>
    {correctColor ? correctColor : "Empty Value"} 
  </div>;
};

export default Square;
