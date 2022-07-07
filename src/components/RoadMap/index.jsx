import React from "react";
import RoadMapHeader from "./RoadMapHeader";
import "./roadMap.css";
import RoadMapCard from "./RoadMapCard";
import {
  RoadMap01,
  RoadMap02,
  RoadMap03,
  RoadMap04,
  RoadMap05,
  RoadMap06,
  RoadMap08,
  RoadMap10
} from "./RoadMapImages.jsx";
import logoImage from "../../assets/svg.svg";
const RoadMapComplete = () => {
  const clickEventHandler = () => {
    console.log("clicked");
    const window = window.addEventListener("click");
  };
  return (
    <>
      <section className="road-map-complete">
        <div className="grid">
          <div className="road-map-com__first">
            <h1>
              RoadMap{" "}
              <span>
                <sup>
                  <img src={logoImage} alt="" />
                </sup>
              </span>
            </h1>
          </div>
          <div className="road-map-com__second">
            <p>
              This is our roadmap so far, it outlines our goals and where we
              want to take our Roundies. But this is only the beginning! We want
              to build our project around our community and we have a lot of
              ideas and concepts that we are working on! Join our Fam and don’t
              hesitate to share your ideas with us.
            </p>
          </div>
        </div>
        <div className="all-road-maps" onClick={clickEventHandler}>
          <div className="road-map-first">
            <RoadMapCard
              roadMapImg={RoadMap01}
              roadMapText="10% │ selling out 5000 NFT including exclusive rare. 💰- now we’re getting serious, 5000 NFT are going to be minted and then let the brightness begin!!!"
              roadMapPerecent="10%"
            />
          </div>
          <div className="road-map-second same-class">
            <RoadMapCard
              roadMapImg={RoadMap02}
              roadMapText="20% │ release project on magic eden. - HOLD!! We are on a long journey, there is a lot of surprises waiting ahead.And most importantly don’t trade on a pizza🍕"
              roadMapPerecent="20%"
            />
          </div>
          <div className="road-map-third same-class">
            <RoadMapCard
              roadMapImg={RoadMap03}
              roadMapText="30% │ exclusive meeting between the team, special roundies and the holders. 💻 
- It’s time to get closer. Be 100% sure that the definition of impossible will change in your mind from now on.
"
              roadMapPerecent="30%"
            />
          </div>
          <div className="road-map-fourth same-class">
            <RoadMapCard
              roadMapImg={RoadMap04}
              roadMapText="40% │ You gave us a lot now it’s our turn… 🎁 
- Giving away 150 NFT including exclusive rare to our community who got us here in the first place.
"
              roadMapPerecent="40%"
            />
          </div>
          <div className="road-map-fifth same-class">
            <RoadMapCard
              roadMapImg={RoadMap05}
              roadMapText="50% | We remember our loved ones and where we came from 
- We will be donating to cancer center and children's charity 2.5%each from the minting profite, not to forget these donations wouldn’t exist without you.
"
              roadMapPerecent="50%"
            />
          </div>
          <div className="road-map-sixth same-class">
            <RoadMapCard
              roadMapImg={RoadMap06}
              roadMapText="60% │ Airdrop!! 🛩️ 🩸 
- A 10% cut of our royalty fees will be Randomly airdropped to 🐳 Whale roundies of our ( 6+ NFT holders) each month, wait for us because this won’t be all…
"
              roadMapPerecent="60%"
            />
          </div>
          <div className="road-map-seventh same-class">
            <RoadMapCard
              roadMapImg={RoadMap08}
              roadMapText="80% │ let’s bring back the death
-  🐳 Each WHALE roundie Holders of 6+ NFTs will be airdropped animated NFT done in a way that will blow your mind and done specially for him "
              roadMapPerecent="80%"
            />
          </div>
          <div className="road-map-eight same-class">
            <RoadMapCard
              roadMapImg={RoadMap10}
              roadMapText="100% │ World invasion 🗺️ 🔥 
- Our champs, our community let’s rule the world. And for our whales, your role is continuous, get ready You will be a part of our continuous projects, wait for us…
"
              roadMapPerecent="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMapComplete;
