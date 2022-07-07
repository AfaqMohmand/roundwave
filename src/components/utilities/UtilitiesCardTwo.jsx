import React from "react";
import "./utilities-module.css";
const UtilitiesCardTwo = ({ utilitiesImg, utilitiesText }) => {
  return (
    <>
      <section className="utilities-card-two" style={{ marginLeft: "40px" }}>
        <div className="flex">
          <div className="text-container">
            <p>{utilitiesText}</p>
          </div>
          <div className="img-container">
            <img src={utilitiesImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default UtilitiesCardTwo;
