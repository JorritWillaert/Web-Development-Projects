import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };
  return (
    <header style={headerStyle}>
      <h1>Groceries List</h1>
    </header>
  );
};

export default Header;
