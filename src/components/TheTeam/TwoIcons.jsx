import React, { Suspense, useEffect } from "react";
import "./theTeam.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { VscTwitter } from "react-icons/Vsc";
const TwoIcons = ({ Insta, Twitt, linke }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  useEffect(() => {
    console.log(Twitt && Twitt);
    console.log(Insta && Insta);
    console.log(linke && linke);
  }, []);

  return (
    <section className="icons">
      <div className="flex">
        <div className="instagram-icon">
          {!Insta ? (
            <a href={linke} target="_blank" rel="noopener noreferrer">
              <BsLinkedin href={linke} size={20} />
            </a>
          ) : (
            <a href={Insta} target="_blank" rel="noopener noreferrer">
              <FiInstagram size={20} />
            </a>
          )}
        </div>
        <div className="twitter-icon">
          {!Twitt ? (
            <a href={linke} target="_blank" rel="noopener noreferrer">
              <BsLinkedin href={linke} size={20} />
            </a>
          ) : (
            <a href={Twitt} target="_blank" rel="noopener noreferrer">
              <VscTwitter size={20} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoIcons;
