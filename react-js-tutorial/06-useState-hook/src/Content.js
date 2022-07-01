import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Jorrit"); // Jorrit is default name
  // Use const since you don't want to redefine the name directly, you should do via setName

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
    // Some special behavior here! State only changed after function (with +1)
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};

export default Content;
