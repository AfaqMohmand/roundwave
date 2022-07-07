import React, { useState } from "react";
import "./theTeam.css";
import bgImg from "../../assets/TeamMember-bg.webp";
import TheTeamCards, { UserData } from "./TheTeamCards";
import { Headings } from "../RoadMap/RoadMapHeader";
import svgImg from "../../assets/svg.svg";
import { userOne } from "./TeamImg";
import ShowTeamCards from "./ShowTeamCards";
const TheTeam = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const changeUser = (index) => {
    setCurrentUser(index);
    setTimeout(() => {
      setCurrentUser(null);
    }, 4000);
  };
  return (
    <>
      <section className="the-team">
        <div className="text-center">
          <h1>
            OUR TeAm
            <sup>
              <img src={svgImg} alt="" />
            </sup>
          </h1>
        </div>
        <img src={bgImg} alt="" className="TeambBgImage" />
        <div
          className="red-circle red-circle-one"
          onClick={() => changeUser(1)}
          // onMouseLeave={() => changeUser(null)}
        ></div>
        <div
          className="red-circle red-circle-two"
          onClick={() => changeUser(2)}
          // onMouseLeave={() => changeUser(null)}
        ></div>
        <div
          className="red-circle red-circle-three"
          onClick={() => changeUser(3)}
        ></div>
        <div
          className="red-circle red-circle-four"
          onClick={() => changeUser(4)}
          // onMouseLeave={() => changeUser(null)}
        ></div>
        <div
          className="red-circle red-circle-five"
          onClick={() => changeUser(5)}
          // onMouseLeave={() => changeUser(null)}
        ></div>
        <div
          className="red-circle red-circle-six"
          onClick={() => changeUser(6)}
          // onMouseLeave={() => changeUser(null)}
        ></div>
        <TheTeamCards currentUser={currentUser} />
        <div className="show-cards">
          <ShowTeamCards />
        </div>
      </section>
    </>
  );
};

export default TheTeam;
