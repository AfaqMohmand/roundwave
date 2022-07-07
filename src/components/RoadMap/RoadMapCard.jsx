import React from "react";
import "./roadMap.css";
const RoadMapCard = ({ roadMapImg, roadMapPerecent, roadMapText }) => {
  return (
    <>
      <section className="road-map-cards" style={{ marginLeft: "40px" }}>
        <div className="grid">
          <div className="road-map-img">
            <img src={roadMapImg} alt="" />
            <span>
              <div className="emphty"></div>
            </span>
          </div>
          <div className="road-map-text">
            <h1>{roadMapPerecent}</h1>
            <p>{roadMapText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMapCard;
