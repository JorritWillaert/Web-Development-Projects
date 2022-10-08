import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Sneakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product2"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
