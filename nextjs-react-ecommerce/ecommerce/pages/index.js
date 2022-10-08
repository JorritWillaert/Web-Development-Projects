import React from "react";

const Home = () => {
  return (
    <>
      HereBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Sneakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
