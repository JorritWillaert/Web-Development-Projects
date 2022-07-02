import React from "react";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      type="button"
      value={reqType}
      onClick={(e) => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
