import React from "react";
import "./roadMap.css";
import svgImg from "../../assets/svg.svg";
const RoadMapHeader = () => {
  return (
    <>
      <section className="road-map">
        <Headings text="RoadMap" svgImage={svgImg} />
      </section>
    </>
  );
};

export default RoadMapHeader;

export function Headings({ text, svgImage }) {
  return (
    <>
      <div className="heading-container">
        <h1>{text}</h1>
        <span>
          <sup>
            <img src={svgImage} />
          </sup>
        </span>
      </div>
    </>
  );
}
