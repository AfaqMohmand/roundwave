import React from "react";
import "./utilities-module.css";
const UtilitiesCard = ({ utilitiesImg, utilitiesText }) => {
  return (
    <>
      <section className="utilities-card" style={{ marginLeft: "40px" }}>
        <div className="flex">
          <div className="img-container">
            <img src={utilitiesImg} alt="" />
          </div>
          <div className="text-container">
            <p>{utilitiesText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UtilitiesCard;
