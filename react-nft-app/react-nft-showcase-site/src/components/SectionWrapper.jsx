import React from "react";

import Button from "./Button";
import styles from "../styles/Global";
import assets from "../assets";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div className={`flex items-center ${styles.boxClass}`}>
        <div className={`${styles.descDiv}`}></div>
        <h1 className={`${styles.h1Text}`}>{title}</h1>
        <p className={`${styles.descriptionText}`}>
          <h1>{description}</h1>
        </p>
        {showBtn && (
          <Button assetUrl={assets.expo} link="deployed nft marketplace rn" />
        )}
      </div>
      {/* <img src={mockupImg} alt="mockup" /> */}
    </div>
  );
};

export default SectionWrapper;
