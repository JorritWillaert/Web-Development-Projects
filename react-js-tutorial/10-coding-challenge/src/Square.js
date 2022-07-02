import React from "react";

const Square = ({ color, hexValue }) => {
  const lowerCaseColor = color.toLowerCase();
  const correctColor = CSS.supports("color", lowerCaseColor)
    ? lowerCaseColor
    : "";
  return (
    <div className="square" style={{ background: correctColor }}>
      <p>{correctColor ? correctColor : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
