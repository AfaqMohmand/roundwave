import React, { useState } from "react";
import "./theTeam.css";
import {
  userOne,
  userTwo,
  userThree,
  userFour,
  userFive,
  userSix
} from "./TeamImg.jsx";
import TwoIcons from "./TwoIcons";
const TheTeamCards = ({ currentUser }) => {
  return (
    <>
      <section className="TheTeamCards">
        {currentUser === 1 && (
          <div className="first-user">
            <UserData
              profileImg={userOne}
              userName="GAELLE NOHRA"
              userProfession="Content Creator"
              userInstagram="https://instagram.com/gaellee.n?igshid=YmMyMTA2M2Y="
              userTwitter="https://twitter.com/gaelle_nohra?s=21&t=nlRvLiogY6kQvoEqagbLgg"
            />
          </div>
        )}
        {currentUser === 2 && (
          <div className="second-user">
            <UserData
              profileImg={userTwo}
              userName="BLOCTak"
              userProfession="Developer"
              userInstagram="https://www.instagram.com/bloc.tak/"
              userLinkdin="https://www.linkedin.com/company/blocktak/"
            />
          </div>
        )}
        {currentUser === 3 && (
          <div className="third-user">
            <UserData
              profileImg={userThree}
              userName="ABDALLAH SHEET"
              userProfession="CEO-CFO"
              userInstagram="https://instagram.com/abdallah_sheet?igshid=YmMyMTA2M2Y"
              userTwitter="https://twitter.com/abdallahsheet?s=21&t=nlRvLiogY6kQvoEqagbLgg"
            />
          </div>
        )}
        {currentUser === 4 && (
          <div className="fourth-user">
            <UserData
              profileImg={userFour}
              userName="WiSSAM NAHLE"
              userProfession="Co-Founder"
              userInstagram="https://instagram.com/wissam.n8?igshid=YmMyMTA2M2Y="
              userTwitter="https://twitter.com/wissamm_nahle?s=21&t=nlRvLiogY6kQvoEqagbLgg"
            />
          </div>
        )}
        {currentUser === 5 && (
          <div className="fifth-user">
            <UserData
              profileImg={userFive}
              userName="MUCTEBA SeYIT"
              userProfession="Artist"
              userInstagram="https://instagram.com/muctebaseyit?igshid=YmMyMTA2M2Y="
              userTwitter="https://twitter.com/mucteba_seyit?s=21&t=nlRvLiogY6kQvoEqagbLgg"
            />
          </div>
        )}
        {currentUser === 6 && (
          <div className="sixth-user">
            <UserData
              profileImg={userSix}
              userName="KHAWAJA ALI"
              userProfession="Advisor"
              userTwitter="https://twitter.com/khawajaali246"
              userLinkdin="https://www.linkedin.com/in/khawaja-ali/"
            />
          </div>
        )}
      </section>
    </>
  );
};
export default TheTeamCards;
export function UserData({
  profileImg,
  userName,
  userProfession,
  userInstagram,
  userTwitter,
  userLinkdin
}) {
  return (
    <section className="the-team-cards">
      <div className="team-cards">
        <img src={profileImg} alt="" />
        <h2>{userName}</h2>
        <p>{userProfession}</p>
        <TwoIcons
          Insta={userInstagram}
          Twitt={userTwitter}
          linke={userLinkdin}
        />
      </div>
    </section>
  );
}
