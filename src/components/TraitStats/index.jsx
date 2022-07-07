import React from "react";
import RoadMapHeader, { Headings } from "../RoadMap/RoadMapHeader";
import svgImage from "../../assets/svg.svg";
import "./traitStats.css";
import NftImage from "../../assets/Space_grotest_medium.webp";
const TraitStats = () => {
  return (
    <>
      <section className="trait-stats">
        <div className="trait-stats-headingSection">
          <h1>
            TRAIT STATS{" "}
            <span>
              <sup>
                <img src={svgImage} alt="" />
              </sup>
            </span>
          </h1>
        </div>
        <CardTemplate />
      </section>
    </>
  );
};

export default TraitStats;

export function CardTemplate() {
  return (
    <section className="card-whole-template">
      <section className="card-template">
        <div className="card-inner-template">
          <div className="grid">
            <div className="trait-state-containerOne">
              <div className="first-row">
                <p>Project Size</p>
                <h2>5000</h2>
                <h6>NFTS</h6>
                <hr />
              </div>
              <div className="first-row second-row">
                <p>Public Sale</p>
                <h2>2.2 SOL</h2>
                <hr />
              </div>
              <div className="first-row third-row">
                <p>Presale (WL)</p>
                <h2>TBA</h2>
                <hr />
              </div>
              <div className="first-row fourth-row">
                <p>Mint Date</p>
                <h2>TBA</h2>
              </div>
            </div>
            <div className="trait-state-containerTwo">
              <img src={NftImage} alt="Fucking-Img" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
