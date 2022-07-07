import React from "react";
import "./footer.css";
import logoImg from "../../Photo/Logo.png";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="flex">
        <div className="footer-grid">
          <div className="footer-img">
            <img src={logoImg} alt="" />
          </div>
          <div className="footer-nav-parent">
            <ul className="footer-nav">
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Utilities">Utilities</a>
              </li>
              <li>
                <a href="RoadMap">RoadMap</a>
              </li>
              <li>
                <a href="Team">Team</a>
              </li>
              <li>
                <a href="Traits">Traits</a>
              </li>
              <li>
                <a href="FAQS">FAQS</a>
              </li>
              <li>
                <a href="Mint">Mint</a>
              </li>
            </ul>
          </div>

          <div className="footer-icons">
            <NavIcons />
          </div>
          <div className="responsiveItems">
            <div className="resImage">
              <img src={logoImg} alt="" />
            </div>
            <div className="resIcons">
              <div className="twitter-ic">
                <AiOutlineTwitter size={40} />
              </div>
              <div className="instagram-ic">
                <AiFillInstagram size={40} />
              </div>
              <div className="discord-ic">
                <FaDiscord size={40} />
              </div>
            </div>
            <div className="res-underline">
              <span></span>
            </div>
            <div className="res-footer-text">
              <p>2022,All Rights Reserved Powered By BlocTak</p>
            </div>
          </div>
        </div>

        <div className="underline">
          <span></span>
        </div>
        <div className="blocktak-text">
          <p>2022, All Rights Reserved</p>
          <p className="blocktak-second-p">Powered By BlocTak</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
export function NavIcons() {
  return (
    <section className="footerIcons">
      <div className="twitter-container">
        <AiOutlineTwitter size={20} className="icons" />
        <span>
          <p>Twitter</p>
        </span>
      </div>
      <div className="instagram-container">
        <AiFillInstagram size={20} className="icons" />
        <span>
          <p>INSTAGRAM</p>
        </span>
      </div>
      <div className="discord-container">
        <FaDiscord size={20} className="icons discord-icon" />
        <span>
          <p>DISCORD</p>
        </span>
      </div>
    </section>
  );
}
