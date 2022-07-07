import React from "react";
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
const ShowTeamCards = () => {
  return (
    <section className="show-dummy-cards">
      <div className="show-dummy-cards__flex">
        <div className="first-dummy-card">
          <UserData
            userName="MUCTEBA SEYIT"
            profileImg={userSix}
            userProfession="Artist"
            userInstagram="https://instagram.com/muctebaseyit?igshid=YmMyMTA2M2Y="
            userTwitter="https://twitter.com/mucteba_seyit?s=21&t=nlRvLiogY6kQvoEqagbLgg"
          />
        </div>
        <div className="second-dummy-card">
          <UserData
            userName="WISSAM NAHLE"
            profileImg={userFive}
            userProfession="Co-Founder"
            userInstagram="https://instagram.com/wissam.n8?igshid=YmMyMTA2M2Y="
            userTwitter="https://twitter.com/wissamm_nahle?s=21&t=nlRvLiogY6kQvoEqagbLgg"
          />
        </div>
      </div>
      <div className="show-dummy-cards__flex show-dummy-cards-two">
        <div className="third-dummy-card">
          <UserData
            userName="ABDALLAH SHEET"
            profileImg={userFour}
            userProfession="CEO-CFO"
            userInstagram="https://instagram.com/abdallah_sheet?igshid=YmMyMTA2M2Y"
            userTwitter="https://twitter.com/abdallahsheet?s=21&t=nlRvLiogY6kQvoEqagbLgg"
          />
        </div>
        <div className="fourth-dummy-card">
          <UserData
            userName="KHAWAJA ALI"
            profileImg={userSix}
            userProfession="Advisor"
            userLinkedin="https://www.linkedin.com/in/khawaja-ali/"
            userTwitter="https://twitter.com/khawajaali246"
          />
        </div>
      </div>
      <div className="show-dummy-cards__flex show-dummy-cards-three">
        <div className="fifth-dummy-card">
          <UserData
            userName="BLOCTAK"
            profileImg={userTwo}
            userProfession="Dev Team"
            userInstagram="https://www.instagram.com/bloc.tak/"
            userLinkedin="https://www.linkedin.com/company/blocktak/"
          />
        </div>
        <div className="sixth-dummy-card">
          <UserData
            userName="GOELLE NOHRA"
            profileImg={userOne}
            userProfession="Content-Creator"
            userInstagram="https://instagram.com/gaellee.n?igshid=YmMyMTA2M2Y="
            userTwitter="https://twitter.com/gaelle_nohra?s=21&t=nlRvLiogY6kQvoEqagbLgg"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowTeamCards;
export function UserData({
  profileImg,
  userName,
  userProfession,
  userInstagram,
  userTwitter
}) {
  return (
    <section className="the-team-cards">
      <div className="team-cards">
        <img src={profileImg} alt="" />
        <h2>{userName}</h2>
        <p>{userProfession}</p>
        <TwoIcons Insta={userInstagram} Twitt={userTwitter} />
      </div>
    </section>
  );
}
