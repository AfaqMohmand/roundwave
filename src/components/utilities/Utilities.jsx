import React from "react";
// import styles from "./utilities.module.css";
import "./utilities-module.css";
import svgIcon from "../../assets/svg.svg";
import {
  utilities01,
  utilities02,
  utilities03,
  utilities04,
  utilities05
} from "./index";
import UtilitiesCard from "./UtilitiesCard";
import UtilitiesCardTwo from "./UtilitiesCardTwo";
import RoadMapCard from "../RoadMap/RoadMapCard";
const Utilities = () => {
  return (
    <>
      <section className="utilities">
        <div className="container">
          <div className="heading" style={{ marginLeft: "50px" }}>
            <h1>
              Utilities
              <span>
                <sup>
                  <img src={svgIcon} alt="" />
                </sup>
              </span>
            </h1>
          </div>
          <p className="utilities-p" style={{ marginLeft: "50px" }}>
            What you're seeing now is only a fraction of the profit you'll see
            if you made the proper decision and became a roundie.
          </p>
          <section className="utilites-main-card">
            <div className="first-card">
              <UtilitiesCard
                utilitiesImg={utilities01}
                utilitiesText="When you own Round Wave NFT (or any other NFT from a project with whom we collaborate), you can take out a loan for 60% of the project's floor price in exchange for us holding your NFT. You'll get it back when you return the money with no interest, and you will be able to return the money and receive your NFT at anytime before 3 months."
              />
            </div>
            <div className="third-card utility-same-class">
              <UtilitiesCardTwo
                utilitiesImg={utilities03}
                utilitiesText=" All our team  featuring the artist, The manager, the crypto expert, the  developer and the content creator will all be at the service of the holders  to answer one by one all of their questions and will be ready to answer their calls and meet with them In order to help with anything stuck in their own project "
              />
            </div>
            <div className="fourth-card utility-same-class">
              <UtilitiesCard
                utilitiesText="  Staking website: After Selling out a staking website will be launched. Each holder depending on what he is holding of course(common NFT,rare NFT, multiple NFT…) will be getting in return $WAVE token and the more time you hold the more money you will make and your profit will get bigger just by holding your own roundy"
                utilitiesImg={utilities04}
              />
            </div>
            <div className="fifth-card utility-same-class">
              <UtilitiesCardTwo
                utilitiesImg={utilities05}
                utilitiesText="Each holder will get the chance to win a free NFT by entering the 150 NFT giveaways in addition to the Airdrops he might be getting and many other giveaways and surprises through the way And trust me when I tell you that these surprises are gonna be so worthy."
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Utilities;
