import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import mainLogo from "../../../images/mainLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {BiSolidPhoneCall} from 'react-icons/bi';
import "./Footer.css";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img className='play' src={playStore} alt="playstore" />
        <img className='app' src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src={mainLogo} alt="logo" />
        <h1>E MARKET</h1>
        <p>Quality, Trust and Fast</p>

        <p style={{ fontSize: '0.9vmax' }}>Copyrights 2023 &copy; Sarthak Chatterjee</p>
      </div>

      <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="https://www.instagram.com/sarthak_chatterjee_/" target="_blank">
        <FaInstagram /> Instagram
      </a>
      <a href="https://github.com/sarthakc20" target="_blank">
        <FaGithub /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/sarthak-chatterjee-/" target="_blank">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="tel:+1234567890">
        <BiSolidPhoneCall /> Help Line
      </a>
    </div>
    </footer>
  );
};

export default Footer
