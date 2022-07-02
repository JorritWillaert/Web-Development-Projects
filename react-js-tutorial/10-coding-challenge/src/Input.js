import React from "react";
import colorNames from "colornames";

const Input = ({ color, setColor, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default Input;
